import { Card } from "../../types";

export const researcher: Card = {
  name: "Researcher",
  color: "yellow",
  coreValue: 13,
  deployAbility: "Place a random banished card at the bottom of this location.",
  endGameBonuses:
    "{17} if there are 4 or fewer banished cards at the beginning of end-game-scoring.",
  getEndGameBonusValue: ({ g }) => [{ vp: 17, if: g.banished.length <= 4 }],
};
