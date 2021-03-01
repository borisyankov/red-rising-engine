import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const cyther: Card = {
  name: "Cyther",
  color: "orange",
  coreValue: 14,
  deployAbility:
    "You may gain a Blue from this location. If you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as having the same name as any specific character.",
  endGameBonuses: "{14} if with a Blue.",
  getEndGameBonusValue: ({ p }) => [{ vp: 16, if: isWith(p, "blue") }],
};
