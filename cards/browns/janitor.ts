import { Card, PlayerState } from "../../types";
import { countOf } from "../../scoring/score";

export const janitor: Card = {
  name: "Janitor",
  color: "brown",
  coreValue: 10,
  deployAbility:
    "If deployed directly on top of a Green, Yellow, or Blue, move that card to the top of another location and advance once on the Fleet Track.",
  endGameBonuses: "{5} for each Green, Yellow and Blue.",
  getEndGameBonusValue: ({ p }) => [
    { vp: countOf(p, "green") * 5 },
    { vp: countOf(p, "yellow") * 5 },
    { vp: countOf(p, "blue") * 5 },
  ],
};
