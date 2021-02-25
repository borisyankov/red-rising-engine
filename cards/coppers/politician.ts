import { Card } from "../../types";
import { hasMostInfluence } from "../../scoring/score";

export const politician: Card = {
  name: "Politician",
  color: "copper",
  coreValue: 15,
  deployAbility:
    "If may reveal 2 Golds from your hand. If you do, place 2 Influence on the Institute.",
  endGameBonuses:
    "{15} if you have the most influence on the Institute (or tied for the most).",
  getEndGameBonusValue: ({ p }) => [{ vp: 15, if: hasMostInfluence(p) }],
};
