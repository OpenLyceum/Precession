# Implementation Notes — Rigid Body Precession

Developer notes for the three-screen gyroscope. Educator-facing physics for steady precession is in [model.md](./model.md).

## Architecture

Each screen owns its model and view. Shared rigid-body math and the 3-D drawing helpers live under `src/common/`.

```
main.ts
  ├─ steady-precession-screen/   idealized Ω = τ/(Iω)
  ├─ nutation-screen/            heavy symmetric top (Lagrangian, RK4)
  └─ torque-free-screen/         Euler's equations, the tennis-racket flip

src/common/
  ├─ rigid-body/                 physics shared by the screens
  ├─ view/                       camera, wheel, charts, stage
  ├─ RigidBodyPrecessionScreenIcons.ts
  ├─ SimPanel.ts
  ├─ SimButtonOptions.ts
  └─ TimeModel.ts
```

`src/precession-screen/` is an empty leftover from the template scaffold. Do not mirror it. New screens should copy `src/steady-precession-screen/`.

## Screens

| Folder | Model | Integration |
|---|---|---|
| `src/steady-precession-screen/` | `SteadyPrecessionModel` | Closed form in `SteadyPrecessionPhysics.ts` |
| `src/nutation-screen/` | `NutationModel` | `HeavySymmetricTopPhysics.ts` |
| `src/torque-free-screen/` | `TorqueFreeModel` | `TorqueFreePhysics.ts` (Euler + quaternion RK4) |

`TimeModel` is the play/pause clock composed into the animated models. Screen icons are `src/common/RigidBodyPrecessionScreenIcons.ts`.

## Adding a screen

Follow [SceneryStackTemplate `doc/multi-screen.md`](https://github.com/OpenLyceum/SceneryStackTemplate/blob/main/doc/multi-screen.md). Mirror `src/steady-precession-screen/`, register the screen in `main.ts`, add the locale keys, and wire `homeScreenIcon` and `navigationBarIcon` from the shared icons module.

## Testing

`npm test` runs Vitest (`happy-dom`, `tests/setup.ts`, `--expose-gc`), including `tests/memory-leak.test.ts`. Physics and model-wiring tests live under `tests/` next to the modules above.

## PWA

After `npm run build`, the sim is installable offline via Workbox (`dist/manifest.webmanifest`).
