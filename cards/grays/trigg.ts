import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const TRIGG: Card = {
  name: "Trigg",
  color: "gray",
  coreValue: 15,
  deployAbility:
    "Move a Gray or Yellow from any location to under this card. You may gain that card; if you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as if it is any one other color (in addition to Gray).",
  endGameBonuses: "{5} for each Gray & Yellow (on all locations).",
  getEndGameBonusValue: ({ g }) => [
    { vp: 5 * countOf(g.board, "gray") },
    { vp: 5 * countOf(g.board, "yellow") },
  ],
};
