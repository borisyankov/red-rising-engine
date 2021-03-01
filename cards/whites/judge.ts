import { Card } from "../../types";

export const judge: Card = {
  name: "Judge",
  color: "white",
  coreValue: 10,
  blockAbility:
    "When an opponent tries to steal or banish any of your cards, reveal this to block then.",
  endGameBonuses: "{3} for each of your cards.",
  getEndGameBonusValue: ({ p }) => [{ vp: 3 * p.cards.length }],
};
