import { Card } from "../../types";
import { hasMostInfluence } from "../../scoring/score";

export const administrator: Card = {
  name: "Administrator",
  color: "copper",
  coreValue: 15,
  endGameBonuses:
    "{15} if you have the most Influence on the Institute (or tied for the most).",
  getEndGameBonusValue: ({ p }) => [{ vp: 15, if: hasMostInfluence(p) }],
};
