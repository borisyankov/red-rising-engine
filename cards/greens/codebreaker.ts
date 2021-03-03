import { Card } from "../../types";
import { areUnique } from "../../scoring/score";

export const CODEBREAKER: Card = {
  name: "Codebreaker",
  color: "green",
  coreValue: 8,
  deployAbility:
    "Reveal the bottom card of the deck. If it's a Gold or Silver, leave it there; otherwise gain it. Banish Codebreaker unless you deployed it on top of a Gold or Silver.",
  endGameBonuses:
    "{22} if the first letter of the names of your cards are all different.",
  getEndGameBonusValue: ({ p }) => [
    {
      vp: 22,
      if: areUnique(p.cards.map((card) => card.name[0])),
    },
  ],
};
