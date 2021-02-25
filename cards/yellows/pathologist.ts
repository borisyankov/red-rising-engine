import { Card, PlayerState } from "../../types";

export const pathologist: Card = {
  name: "Pathologist",
  color: "yellow",
  coreValue: 5,
  deployAbility:
    "Banish the bottom card of this location (if it's not this card).",
  endGameBonuses:
    "{10} if there are 5-9 banished cards at the beginning of end-game scoring. {25} if there are at least 10 banished cards at the beginning of end-game scoring.",
  getEndGameBonusValue: ({ g }) => [
    { vp: 10, if: g.banished.length >= 5 && g.banished.length <= 9 },
    { vp: 25, if: g.banished.length >= 10 },
  ],
};
