/**
 * Fleet-standard memory-leak regression suite (SceneryStackTemplate / QubitSketch pattern).
 *
 * Creates a disposable model object inside a function boundary, disposes it, forces
 * garbage collection via global.gc (--expose-gc in vitest.config.ts), then asserts via
 * WeakRef that the object was collected. V8 requires a function boundary (not merely
 * a block scope) so local strong references die when the helper returns.
 */

import { describe, expect, it } from "vitest";
import { TimeModel } from "../src/common/TimeModel.js";
import { NutationModel } from "../src/nutation-screen/model/NutationModel.js";
import { SteadyPrecessionModel } from "../src/steady-precession-screen/model/SteadyPrecessionModel.js";
import { TorqueFreeModel } from "../src/torque-free-screen/model/TorqueFreeModel.js";
import { describeDisposalLeaks, forceGC } from "./helpers/memoryLeak.js";

function createAndDisposeTimeModel(): WeakRef<object> {
  const model = new TimeModel();
  const ref = new WeakRef<object>(model);
  model.dispose();
  return ref;
}

describe("Memory leak regression", () => {
  it("TimeModel is collected after dispose", async () => {
    const ref = createAndDisposeTimeModel();
    await forceGC(ref);
    expect(ref.deref()).toBeUndefined();
  });

  it("double dispose() does not throw", () => {
    const model = new TimeModel();
    model.dispose();
    expect(() => model.dispose()).not.toThrow();
  });

  // The screen models each hold a web of DerivedProperties over their own state, plus
  // lazyLink relaunch listeners. Every one of those has to be released by dispose(),
  // or switching screens leaks a whole integrator.
  it("SteadyPrecessionModel is collected after dispose", async () => {
    const ref = (() => {
      const model = new SteadyPrecessionModel();
      model.step(1 / 60);
      const weak = new WeakRef<object>(model);
      model.dispose();
      return weak;
    })();
    await forceGC(ref);
    expect(ref.deref()).toBeUndefined();
  });

  it("TorqueFreeModel is collected after dispose", async () => {
    const ref = (() => {
      const model = new TorqueFreeModel();
      model.stepOnce(1 / 60);
      const weak = new WeakRef<object>(model);
      model.dispose();
      return weak;
    })();
    await forceGC(ref);
    expect(ref.deref()).toBeUndefined();
  });

  it("repeated create/dispose cycles leave no survivors", async () => {
    const refs: WeakRef<object>[] = [];
    for (let i = 0; i < 10; i++) {
      refs.push(createAndDisposeTimeModel());
    }
    await forceGC(refs);
    const survivors = refs.filter((r) => r.deref() !== undefined).length;
    expect(survivors).toBe(0);
  });
});

describeDisposalLeaks([
  { name: "NutationModel", create: () => new NutationModel() },
  { name: "SteadyPrecessionModel", create: () => new SteadyPrecessionModel() },
  { name: "TorqueFreeModel", create: () => new TorqueFreeModel() },
  { name: "TimeModel", create: () => new TimeModel(), idempotentDispose: true },
]);
