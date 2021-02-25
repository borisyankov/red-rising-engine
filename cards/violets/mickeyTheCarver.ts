import { isWith } from "../../scoring/score";
import { Card } from "../../types";

export const mickeyTheCarver: Card = {
  name: "Mickey the Carver",
  color: "violet",
  coreValue: 15,
  endGameBonuses:
    "{10} if there is at least 1 banished Red. {10} if with a Gold.",
  getEndGameBonusValue: ({ g, p }) => [
    { vp: 10, if: isWith(g.banished, "red") },
    { vp: 10, if: isWith(p, "gold") },
  ],
};
