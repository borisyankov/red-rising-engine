import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const jopho: Card = {
  name: "Jopho",
  color: "obsidian",
  coreValue: 10,
  deployAbility:
    "You may gain Alfrun or Nero from this location. If you do, regain Jopho and end your turn.",
  endGameBonuses: "{10} if with Alfrun. {10} if with Nero.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 10, if: isWith(p, "Alfrun") },
    { vp: 10, if: isWith(p, "Nero") },
  ],
};
