import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const ARTISAN_CHEF: Card = {
  name: "Artisan Chef",
  color: "brown",
  coreValue: 10,
  deployAbility:
    "If deployed directly on top of a Gold, move that Gold to the top of another location and place 1 Influence on the Institute.",
  endGameBonuses: "{5} for each Gold. Ignore any lost points from Golds.",
  getEndGameBonusValue: ({ p }) => [
    { vp: countOf(p, "gold") * 5 },
    // TODO: Ignore any lost points from Golds.
  ],
};
