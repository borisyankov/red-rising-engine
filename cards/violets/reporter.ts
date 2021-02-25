import { Card, PlayerState } from "../../types";
import { haveMostHelium } from "../../scoring/score";

export const reporter: Card = {
  name: "Reporter",
  color: "violet",
  coreValue: 6,
  deployAbility:
    "If you have more Helium than the player to your right, give them the Reporter, gan the top 2 cards of the deck, then end your turn.",
  endGameBonuses: "{29} if you have the most Helium (or tied for the most).",
  getEndGameBonusValue: ({ p }) => [{ vp: 29, if: haveMostHelium(p) }],
};
