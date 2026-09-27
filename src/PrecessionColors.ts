/**
 * PrecessionColors.ts
 *
 * Defines all dynamic colors for the simulation using ProfileColorProperty.
 *
 * Each color has two profiles:
 *   - "default"   — used in standard (dark) mode
 *   - "projector" — used when the user enables Projector Mode in Preferences
 *
 * SceneryStack switches profiles automatically; no manual toggling is needed.
 *
 * ── Usage ─────────────────────────────────────────────────────────────────────
 * Import PrecessionColors and pass properties directly to Node's fillProperty or
 * strokeProperty options:
 *
 *   import PrecessionColors from "../../PrecessionColors.js";
 *
 *   new Rectangle( 0, 0, 100, 50, {
 *     fillProperty: PrecessionColors.backgroundColorProperty,
 *   });
 *
 * ── How to add a color ────────────────────────────────────────────────────────
 * Add a new ProfileColorProperty entry to the PrecessionColors object below.
 * Always provide both "default" and "projector" values.
 */
import { Color, ProfileColorProperty } from "scenerystack/scenery";
import PrecessionNamespace from "./PrecessionNamespace.js";

const PrecessionColors = {
  /**
   * Background color for the simulation screen.
   * Deep navy in default mode; white in projector mode.
   */
  backgroundColorProperty: new ProfileColorProperty(PrecessionNamespace, "background", {
    default: "#1a1a2e",
    projector: "#ffffff",
  }),

  /**
   * Primary accent color for highlights, selected items, and key UI elements.
   * Sky blue in default mode; dark navy in projector mode.
   */
  accentColorProperty: new ProfileColorProperty(PrecessionNamespace, "accent", {
    default: "#4fc3f7",
    projector: "#1a1a2e",
  }),

  /**
   * Background fill for control panels and dialogs.
   * Deep blue in default mode; light gray in projector mode.
   */
  panelBackgroundColorProperty: new ProfileColorProperty(PrecessionNamespace, "panelBackground", {
    default: "#16213e",
    projector: "#f5f5f5",
  }),

  /**
   * Border/stroke color for control panels and dialogs.
   * Teal-navy in default mode; medium gray in projector mode.
   */
  panelBorderColorProperty: new ProfileColorProperty(PrecessionNamespace, "panelBorder", {
    default: "#0f3460",
    projector: "#999999",
  }),

  /**
   * Text color for labels, readouts, and general UI text.
   * Near-white in default mode; near-black in projector mode.
   */
  textColorProperty: new ProfileColorProperty(PrecessionNamespace, "text", {
    default: "#e0e0e0",
    projector: "#1a1a1a",
  }),

  // ── Light control surfaces ───────────────────────────────────────────────────
  // White chrome (combo boxes, flat push buttons, editable input fields) stays light
  // in both profiles; its text stays dark. Same values in default and projector mode,
  // but defined here so every color lives in one themeable place.

  /** Fill of light control surfaces: combo-box button/list, editable input fields. */
  controlSurfaceColorProperty: new ProfileColorProperty(PrecessionNamespace, "controlSurface", {
    default: "#ffffff",
    projector: "#ffffff",
  }),

  /** Fill of a disabled control surface (grayed-out editable input field). */
  controlSurfaceDisabledColorProperty: new ProfileColorProperty(PrecessionNamespace, "controlSurfaceDisabled", {
    default: "#cccccc",
    projector: "#cccccc",
  }),

  /** Text on light control surfaces: combo items, flat-button labels, field values, preferences. */
  controlSurfaceTextColorProperty: new ProfileColorProperty(PrecessionNamespace, "controlSurfaceText", {
    default: "#1a1a1a",
    projector: "#1a1a1a",
  }),

  /** Angular momentum vector L. */
  angularMomentumColorProperty: new ProfileColorProperty(PrecessionNamespace, "angularMomentum", {
    default: "#4fc3f7",
    projector: "#0277bd",
  }),

  /** Gravitational torque vector τ. */
  torqueColorProperty: new ProfileColorProperty(PrecessionNamespace, "torque", {
    default: "#ff7043",
    projector: "#d84315",
  }),

  /** Weight / gravity force vector. */
  weightColorProperty: new ProfileColorProperty(PrecessionNamespace, "weight", {
    default: "#ffd54f",
    projector: "#f9a825",
  }),

  /** Precession angular velocity vector Ω. */
  precessionColorProperty: new ProfileColorProperty(PrecessionNamespace, "precession", {
    default: "#81c784",
    projector: "#2e7d32",
  }),

  /** Gyroscope axle and disk chrome. */
  gyroscopeColorProperty: new ProfileColorProperty(PrecessionNamespace, "gyroscope", {
    default: "#b0bec5",
    projector: "#546e7a",
  }),

  /** Graph background fill. */
  graphBackgroundColorProperty: new ProfileColorProperty(PrecessionNamespace, "graphBackground", {
    default: "#0f1a2e",
    projector: "#f0f0f0",
  }),

  /** Graph grid lines. */
  graphGridColorProperty: new ProfileColorProperty(PrecessionNamespace, "graphGrid", {
    default: "#2a3f5f",
    projector: "#cccccc",
  }),

  /** Graph trace line. */
  graphTraceColorProperty: new ProfileColorProperty(PrecessionNamespace, "graphTrace", {
    default: "#81c784",
    projector: "#2e7d32",
  }),

  /** Translucent ground ellipse under the gyroscope (panel-border hue @ 40%). */
  sceneGroundColorProperty: new ProfileColorProperty(PrecessionNamespace, "sceneGround", {
    default: new Color(15, 52, 96, 0.4),
    projector: new Color(153, 153, 153, 0.35),
  }),

  /** Path traced by the axle tip on the nutation screen. */
  tipTraceColorProperty: new ProfileColorProperty(PrecessionNamespace, "tipTrace", {
    default: "#ffb74d",
    projector: "#e65100",
  }),

  /** Turning-point circles bounding the nutation band. */
  nutationBandColorProperty: new ProfileColorProperty(PrecessionNamespace, "nutationBand", {
    default: "#ce93d8",
    projector: "#6a1b9a",
  }),

  // ── Solid gyroscope wheel ────────────────────────────────────────────────────
  // These are *base* colors. The renderer shades them per surface with a fixed key
  // light (see Camera3D), so what reaches the screen is a family of tints, not the
  // literal value here. Pick mid-tones: they need headroom to brighten and darken.

  /** Body of the gyroscope wheel — faces and rim. */
  wheelBodyColorProperty: new ProfileColorProperty(PrecessionNamespace, "wheelBody", {
    default: "#5b9bd5",
    projector: "#3f7cb8",
  }),

  /** Painted quadrants and rim studs that make the wheel's spin visible. */
  wheelMarkingColorProperty: new ProfileColorProperty(PrecessionNamespace, "wheelMarking", {
    default: "#f2f4f8",
    projector: "#1f3a52",
  }),

  /** Shadow the wheel casts on the ground plane. */
  sceneShadowColorProperty: new ProfileColorProperty(PrecessionNamespace, "sceneShadow", {
    default: new Color(0, 0, 0, 0.35),
    projector: new Color(60, 70, 80, 0.22),
  }),

  /** Concentric rings and radials on the ground plane — the scene's depth reference. */
  sceneGroundGridColorProperty: new ProfileColorProperty(PrecessionNamespace, "sceneGroundGrid", {
    default: new Color(120, 160, 210, 0.35),
    projector: new Color(90, 110, 130, 0.4),
  }),

  /** The stand the gyroscope pivots on. */
  standColorProperty: new ProfileColorProperty(PrecessionNamespace, "stand", {
    default: "#8c98a4",
    projector: "#66737f",
  }),

  /** Readout color for a state that is unstable or out of range (spin below critical). */
  warningColorProperty: new ProfileColorProperty(PrecessionNamespace, "warning", {
    default: "#ff8a65",
    projector: "#bf360c",
  }),

  /** Top-view inset card fill (graph-background hue @ 70%). */
  sceneInsetCardColorProperty: new ProfileColorProperty(PrecessionNamespace, "sceneInsetCard", {
    default: new Color(15, 26, 46, 0.7),
    projector: new Color(240, 240, 240, 0.85),
  }),
};

export default PrecessionColors;
