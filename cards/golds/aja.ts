import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const AJA: Card = {
  name: "Aja",
  color: "gold",
  coreValue: 15,
  deployAbility:
    "Choose an opponent; they banish 1 of their cards. Then banish Aja.",
  endGameBonuses: "{15} if with Octavia.",
  getEndGameBonusValue: ({ p }) => [{ vp: 15, if: isWith(p, "Octavia") }],
};
