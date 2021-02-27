import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const eo: Card = {
  name: "Eo",
  color: "red",
  coreValue: 7,
  deployAbility:
    "Each opponent must reveal a Red. If they can't, they lose 1 Helium.",
  endGameBonuses:
    "{10} for each other Red. {-10} if with a Gray except Bridget.",
  getEndGameBonusValue: ({ p }) => [
    { vp: (countOf(p, "red") - 1) * 10 },
    {
      vp: -10,
      if: countOf(p, "gray") - countOf(p, "Bridget") > 0,
    },
  ],
};