/**
 * PrecessionPanel.ts
 *
 * A pre-themed Panel that automatically uses PrecessionColors for background and
 * border. Use this for all control panels and info boxes in the sim so that
 * default / projector mode switching is handled automatically.
 *
 * ── Basic usage ───────────────────────────────────────────────────────────────
 *
 *   import { PrecessionPanel } from "../../common/PrecessionPanel.js";
 *   import { VBox, Text } from "scenerystack/scenery";
 *
 *   const content = new VBox({
 *     children: [ new Text("label"), slider ],
 *     spacing: 8,
 *   });
 *   const panel = new PrecessionPanel(content);
 *
 * ── Overriding defaults ───────────────────────────────────────────────────────
 *
 *   // Wider margins, sharper corners, custom stroke
 *   const panel = new PrecessionPanel(content, { xMargin: 20, cornerRadius: 0 });
 *
 *   // Transparent background (decorative border only)
 *   const panel = new PrecessionPanel(content, { fill: "transparent" });
 */

import { type EmptySelfOptions, optionize } from "scenerystack/phet-core";
import type { Node } from "scenerystack/scenery";
import { Panel, type PanelOptions } from "scenerystack/sun";
import PrecessionColors from "../PrecessionColors.js";
import { PANEL_CORNER_RADIUS } from "../PrecessionConstants.js";

export type PrecessionPanelOptions = PanelOptions;

export class PrecessionPanel extends Panel {
  public constructor(content: Node, providedOptions?: PrecessionPanelOptions) {
    const options = optionize<PrecessionPanelOptions, EmptySelfOptions, PanelOptions>()(
      {
        fill: PrecessionColors.panelBackgroundColorProperty,
        stroke: PrecessionColors.panelBorderColorProperty,
        cornerRadius: PANEL_CORNER_RADIUS,
        xMargin: 12,
        yMargin: 10,
      },
      providedOptions,
    );
    super(content, options);
  }
}
