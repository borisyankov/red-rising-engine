import { Card, PlayerState } from "../../types";
import { countOf } from "../../scoring/score";

export const nanny: Card = {
  name: "Nanny",
  color: "brown",
  coreValue: 10,
  deployAbility:
    "If deployed directly on top of a Silver, White or Copper, move that card to the top of another location and gain 1 Helium.",
  endGameBonuses: "{5} for each Silver, White, and Copper.",
  getEndGameBonusValue: ({ p }) => [
    { vp: countOf(p, "silver") * 5 },
    { vp: countOf(p, "white") * 5 },
    { vp: countOf(p, "copper") * 5 },
  ],
};
