import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const PULSE_FIST_ENGINEER: Card = {
  name: "Pulse Fist Engineer",
  color: "orange",
  coreValue: 12,
  deployAbility:
    "You may gain an Obsidian from this location. If you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as having the same name as any specific character.",
  endGameBonuses: "{18} if with an Obsidian.",
  getEndGameBonusValue: ({ p }) => [{ vp: 18, if: isWith(p, "obsidian") }],
};
