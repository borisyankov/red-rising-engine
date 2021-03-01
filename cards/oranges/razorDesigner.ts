import { isWith, notWith } from "../../scoring/score";
import { Card } from "../../types";

export const razorDesigner: Card = {
  name: "Razor Designer",
  color: "orange",
  coreValue: 17,
  deployAbility:
    "You may gain a Gold from this location. If you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as having the same name as any specific character.",
  endGameBonuses: "{13} if with a Gold and no Obsidians.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 13, if: isWith(p, "gold") && notWith(p, "obsidian") },
  ],
};
