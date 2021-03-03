import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const NANNY: Card = {
  name: "Nanny",
  color: "brown",
  coreValue: 10,
  deployAbility:
    "If deployed directly on top of a Silver, White or Copper, move that card to the top of another location and gain 1 Helium.",
  endGameBonuses: "{5} for each Silver, White, and Copper.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 5 * countOf(p, "silver") },
    { vp: 5 * countOf(p, "white") },
    { vp: 5 * countOf(p, "copper") },
  ],
};
