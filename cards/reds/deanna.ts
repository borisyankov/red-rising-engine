import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const DEANNA: Card = {
  name: "Deanna",
  color: "red",
  coreValue: 9,
  deployAbility: "Gain 1 Helium.",
  endGameBonuses: "{26} if with another Red.",
  getEndGameBonusValue: ({ p }) => [{ vp: 26, if: countOf(p, "red") > 1 }],
};
