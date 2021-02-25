import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const cassius: Card = {
  name: "Cassius",
  color: "gold",
  coreValue: 25,
  deployAbility:
    "Gain the card directly under this one. Banish Cassius unless that card is a Gold.",
  endGameBonuses: "{40} if with both Mustang and Darrow. {-20} if ",
  getEndGameBonusValue: ({ p }) => [
    { vp: 40, if: isWith(p, "Mustang") && isWith(p, "Darrow") },
    { vp: -20, if: false },
  ],
};
