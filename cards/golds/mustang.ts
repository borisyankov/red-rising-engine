import { Card } from "../../types";
import { unique } from "../../scoring/score";

export const MUSTANG: Card = {
  name: "Mustang",
  color: "gold",
  coreValue: 20,
  deployAbility:
    "Gain 1 banished card. If this card is not a Gold, banish Mustang.",
  endGameBonuses: "{5} for each different color.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 5 * unique(p.cards.map((card) => card.color)).length },
  ],
};
