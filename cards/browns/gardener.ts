import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const gardener: Card = {
  name: "Gardener",
  color: "brown",
  coreValue: 10,
  endGameBonuses: "5 for each Violet & Pink.",
  getEndGameBonusValue: ({ p }) => [
    { vp: (countOf(p, "violet") + countOf(p, "pink")) * 5 },
  ],
};
