import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const holiday: Card = {
  name: "Holiday",
  color: "gray",
  coreValue: 15,
  deployAbility:
    "Move an Orange or Blue from any location to directly under this card. You may gain that card; if you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as if it is any one other color (in addition to Gray).",
  endGameBonuses: "{5} for each Orange & Blue on all locations.",
  getEndGameBonusValue: ({ g }) => [
    { vp: 5 * countOf(g.board, "orange") },
    { vp: 5 * countOf(g.board, "blue") },
  ],
};
