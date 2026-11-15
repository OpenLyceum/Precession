/**
 * PrecessionPreferencesNode.ts
 *
 * Custom preferences UI shown in Preferences → Simulation. Currently empty —
 * add controls here when the sim gains real preferences.
 */

import { Node } from "scenerystack/scenery";
import type { Tandem } from "scenerystack/tandem";
import PrecessionNamespace from "../PrecessionNamespace.js";
import type { PrecessionPreferencesModel } from "./PrecessionPreferencesModel.js";

/** Empty conventional preferences node; the sim currently uses only framework preferences. */
export class PrecessionPreferencesNode extends Node {
  public constructor(_preferencesModel: PrecessionPreferencesModel, _tandem?: Tandem) {
    super();
  }
}

PrecessionNamespace.register("PrecessionPreferencesNode", PrecessionPreferencesNode);
