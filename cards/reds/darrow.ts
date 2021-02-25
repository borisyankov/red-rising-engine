import { Card, PlayerState } from "../../types";

export const darrow: Card = {
  name: "Darrow",
  color: "red",
  coreValue: 10,
  deployAbility:
    "Gain any other non-Gold from this location. Banish Darrow unless you deployed him on a Gold.",
  endGameBonuses: "{30} if you have 7 or more cards (including Darrow)",
  getEndGameBonusValue: ({ p }) => [{ vp: 30, if: p.cards.length >= 7 }],
};
