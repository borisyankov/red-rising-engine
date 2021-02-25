import { Card, PlayerState } from "../../types";

export const uncleNarol: Card = {
  name: "Uncle Narol",
  color: "red",
  coreValue: 10,
  deployAbility: "Gain 2 Helium.",
  endGameBonuses:
    "{40} if with only cards having core values of 10 points or less.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 40, if: p.cards.every((card) => card.coreValue <= 10) },
  ],
};
