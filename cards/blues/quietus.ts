import { Card } from "../../types";
import { haveMostInfluence } from "../../scoring/score";

export const quietus: Card = {
  name: "Quietus",
  color: "blue",
  coreValue: 14,
  deployAbility:
    "If deployed on the Institute, advance once on the Fleet Track.",
  endGameBonuses:
    "{16} if you have the most Influence on the Institute (or tied for the most)",
  getEndGameBonusValue: ({ g, p }) => [{ vp: 16, if: haveMostInfluence(g, p) }],
};
