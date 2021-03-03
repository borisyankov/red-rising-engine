import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const ROQUE: Card = {
  name: "Roque",
  color: "gold",
  coreValue: 20,
  deployAbility:
    "Look at an opponent's hand, name a card, then randomly select a card from their hand. If you select the named hard, banish it and banish Roque.",
  endGameBonuses: "{5} for each Blue.",
  getEndGameBonusValue: ({ p }) => [{ vp: 5 * countOf(p, "blue") }],
};
