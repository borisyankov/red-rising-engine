import { Card } from "../../types";
import { isWith, notWith } from "../../scoring/score";

export const CASSIUS: Card = {
  name: "Cassius",
  color: "gold",
  coreValue: 25,
  deployAbility:
    "Gain the card directly under this one. Banish Cassius unless that card is a Gold.",
  endGameBonuses:
    "{40} if with both Mustang and Darrow. {-20} if with Darrow (but not Mustang).",
  getEndGameBonusValue: ({ p }) => [
    { vp: 40, if: isWith(p, "Mustang") && isWith(p, "Darrow") },
    { vp: -20, if: isWith(p, "Darrow") && notWith(p, "Mustang") },
  ],
};
