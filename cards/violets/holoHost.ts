import { Card } from "../../types";
import { haveMostInfluence } from "../../scoring/score";

export const HOLO_HOST: Card = {
  name: "Holo Host",
  color: "violet",
  coreValue: 12,
  deployAbility:
    "If you have more Influence on the Institute than the player to your right, give them the Holo Host, gain the top 2 cards of the deck, then end your turn.",
  endGameBonuses:
    "{18} if you have the most Influence on the institute (or tied for the most).",
  getEndGameBonusValue: ({ g, p }) => [{ vp: 18, if: haveMostInfluence(g, p) }],
};
