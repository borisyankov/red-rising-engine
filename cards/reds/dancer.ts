import { Card } from "../../types";
import { notWith } from "../../scoring/score";

export const DANCER: Card = {
  name: "Dancer",
  color: "red",
  coreValue: 8,
  deployAbility:
    "Gain 1 Helium. If you have 2 or more other REds, reveal them to gain 2 more Helium.",
  endGameBonuses: "{11} if with no Grays. {11} if with no Golds.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 11, if: notWith(p, "gray") },
    { vp: 11, if: notWith(p, "gold") },
  ],
};
