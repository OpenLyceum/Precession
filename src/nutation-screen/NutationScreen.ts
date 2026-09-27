/**
 * NutationScreen.ts
 */

import { type EmptySelfOptions, optionize } from "scenerystack/phet-core";
import { Screen, type ScreenOptions } from "scenerystack/sim";
import { createNutationIcon } from "../common/PrecessionScreenIcons.js";
import { StringManager } from "../i18n/StringManager.js";
import PrecessionColors from "../PrecessionColors.js";
import { NutationModel } from "./model/NutationModel.js";
import { NutationKeyboardHelpContent } from "./view/NutationKeyboardHelpContent.js";
import { NutationScreenView } from "./view/NutationScreenView.js";

export class NutationScreen extends Screen<NutationModel, NutationScreenView> {
  public constructor(options: ScreenOptions) {
    super(
      () => new NutationModel(),
      (model) => new NutationScreenView(model),
      optionize<ScreenOptions, EmptySelfOptions, ScreenOptions>()(
        {
          name: StringManager.getInstance().getScreenNames().nutationStringProperty,
          backgroundColorProperty: PrecessionColors.backgroundColorProperty,
          createKeyboardHelpNode: () => new NutationKeyboardHelpContent(),
          homeScreenIcon: createNutationIcon(),
          navigationBarIcon: createNutationIcon(),
        },
        options,
      ),
    );
  }
}
