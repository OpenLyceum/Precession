/**
 * main.ts
 */

import "./brand.js";

import { onReadyToLaunch, PreferencesModel, Sim } from "scenerystack/sim";
import { Tandem } from "scenerystack/tandem";
import { StringManager } from "./i18n/StringManager.js";
import { NutationScreen } from "./nutation-screen/NutationScreen.js";
import PrecessionColors from "./PrecessionColors.js";
import { SteadyPrecessionScreen } from "./steady-precession-screen/SteadyPrecessionScreen.js";
import { TorqueFreeScreen } from "./torque-free-screen/TorqueFreeScreen.js";

onReadyToLaunch(() => {
  const stringManager = StringManager.getInstance();

  const screens = [
    new SteadyPrecessionScreen({
      tandem: Tandem.ROOT.createTandem("steadyPrecessionScreen"),
      backgroundColorProperty: PrecessionColors.backgroundColorProperty,
    }),
    new NutationScreen({
      tandem: Tandem.ROOT.createTandem("nutationScreen"),
      backgroundColorProperty: PrecessionColors.backgroundColorProperty,
    }),
    new TorqueFreeScreen({
      tandem: Tandem.ROOT.createTandem("torqueFreeScreen"),
      backgroundColorProperty: PrecessionColors.backgroundColorProperty,
    }),
  ];

  const sim = new Sim(stringManager.getTitleStringProperty(), screens, {
    preferencesModel: new PreferencesModel({
      visualOptions: {
        supportsProjectorMode: true,
        supportsInteractiveHighlights: true,
      },
      localizationOptions: {
        supportsDynamicLocale: true,
      },
    }),
    credits: {
      leadDesign: "",
      softwareDevelopment: "",
      team: "",
      qualityAssurance: "",
    },
  });

  sim.start();
});
