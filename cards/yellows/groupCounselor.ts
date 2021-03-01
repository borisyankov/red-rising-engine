import { Card } from "../../types";

export const groupCounselor: Card = {
  name: "Group Counselor",
  color: "yellow",
  coreValue: 35,
  deployAbility:
    "Choose up to 3 banished cards and place each of them either on the top or bottom of the deck.",
  endGameBonuses: "{-1} per banished card.",
  getEndGameBonusValue: ({ g }) => [{ vp: -1 * g.banished.length }],
};
