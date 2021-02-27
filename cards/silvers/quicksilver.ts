import { Card, PlayerState } from "../../types";
import { haveMostHelium } from "../../scoring/score";

export const quicksilver: Card = {
  name: "Quicksilver",
  color: "silver",
  coreValue: 40,
  deployAbility:
    "Steal 1 Helium from the opponent with the most Helium (if tied, you choose which of those opponents).",
  endGameBonuses: "{-30} if any opponent has more Helium than you.",
  getEndGameBonusValue: ({ p }) => [{ vp: -30, if: !haveMostHelium(p) }],
};