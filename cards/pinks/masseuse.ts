import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const masseuse: Card = {
  name: "Masseuse",
  color: "pink",
  coreValue: 14,
  deployAbility:
    "Move the top card of another location to the top of a different location. Gain the original location bonus for that card.",
  endGameBonuses: "{16} if with a Copper.",
  getEndGameBonusValue: ({ p }) => [{ vp: 16, if: isWith(p, "copper") }],
};
