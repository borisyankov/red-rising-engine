import { Card, PlayerState } from "../../types";

export const zanzibar: Card = {
  name: "Zanzibar",
  color: "violet",
  coreValue: 9,
  deployAbility:
    "Move a card with an odd core value from this location to the top of another location.",
  endGameBonuses:
    "{31} if the core value of each of your cards is an odd number.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 31, if: p.cards.every((card) => card.coreValue % 2 === 1) },
  ],
};
