/**
 * SteadyPrecessionScreen.ts
 */

import { type EmptySelfOptions, optionize } from "scenerystack/phet-core";
import { Screen, type ScreenOptions } from "scenerystack/sim";
import { createSteadyPrecessionIcon } from "../common/PrecessionScreenIcons.js";
import { StringManager } from "../i18n/StringManager.js";
import PrecessionColors from "../PrecessionColors.js";
import { SteadyPrecessionModel } from "./model/SteadyPrecessionModel.js";
import { SteadyPrecessionKeyboardHelpContent } from "./view/SteadyPrecessionKeyboardHelpContent.js";
import { SteadyPrecessionScreenView } from "./view/SteadyPrecessionScreenView.js";

export class SteadyPrecessionScreen extends Screen<SteadyPrecessionModel, SteadyPrecessionScreenView> {
  public constructor(options: ScreenOptions) {
    super(
      () => new SteadyPrecessionModel(),
      (model) => new SteadyPrecessionScreenView(model),
      optionize<ScreenOptions, EmptySelfOptions, ScreenOptions>()(
        {
          name: StringManager.getInstance().getScreenNames().steadyPrecessionStringProperty,
          backgroundColorProperty: PrecessionColors.backgroundColorProperty,
          createKeyboardHelpNode: () => new SteadyPrecessionKeyboardHelpContent(),
          homeScreenIcon: createSteadyPrecessionIcon(),
          navigationBarIcon: createSteadyPrecessionIcon(),
        },
        options,
      ),
    );
  }
}
