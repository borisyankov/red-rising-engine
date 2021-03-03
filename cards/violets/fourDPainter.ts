import { areUnique } from "../../scoring/score";
import { Card } from "../../types";

export const FOUR_D_PAINTER: Card = {
  name: "4D Painter",
  color: "violet",
  coreValue: 9,
  deployAbility:
    "Move a card from this location to the top of another location where there are no cards with the same color as it.",
  endGameBonuses: "{31} if each of your cards is a different color.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 31, if: areUnique(p.cards.map((card) => card.color)) },
  ],
};
