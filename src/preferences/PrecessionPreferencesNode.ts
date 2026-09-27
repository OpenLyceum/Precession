import { Node } from "scenerystack/scenery";
import PrecessionNamespace from "../PrecessionNamespace.js";

/** Empty conventional preferences node; the sim currently uses only framework preferences. */
export class PrecessionPreferencesNode extends Node {}

PrecessionNamespace.register("PrecessionPreferencesNode", PrecessionPreferencesNode);
