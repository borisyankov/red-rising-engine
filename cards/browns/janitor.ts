import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const JANITOR: Card = {
  name: "Janitor",
  color: "brown",
  coreValue: 10,
  deployAbility:
    "If deployed directly on top of a Green, Yellow, or Blue, move that card to the top of another location and advance once on the Fleet Track.",
  endGameBonuses: "{5} for each Green, Yellow and Blue.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 5 * countOf(p, "green") },
    { vp: 5 * countOf(p, "yellow") },
    { vp: 5 * countOf(p, "blue") },
  ],
};
