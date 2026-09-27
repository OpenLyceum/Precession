import PrecessionNamespace from "../PrecessionNamespace.js";

/**
 * Reserved for simulation-specific preferences (Preferences → Simulation). Each preference
 * Property should take its initial value from a query parameter in
 * precessionQueryParameters.ts; add the matching control to PrecessionPreferencesNode and register the
 * node under `simulationOptions.customPreferences` in src/main.ts.
 */
export class PrecessionPreferencesModel {
  public reset(): void {
    // No simulation-specific preferences yet.
  }
}

PrecessionNamespace.register("PrecessionPreferencesModel", PrecessionPreferencesModel);
