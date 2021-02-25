import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const dancer: Card = {
  name: "Dancer",
  color: "red",
  coreValue: 8,
  endGameBonuses: "{11} if with no Grays. {11} if with no Golds.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 11, if: isWith(p, "gray") },
    { vp: 11, if: isWith(p, "gold") },
  ],
};
