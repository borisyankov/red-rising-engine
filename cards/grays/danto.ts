import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const DANTO: Card = {
  name: "Danto",
  color: "gray",
  coreValue: 10,
  deployAbility:
    "Move a Copper or White from any location to directly under this card. You may gain this card; if you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as if it is any one other color (in addition to Gray).",
  endGameBonuses: "{5} for each Copper & White on all locations.",
  getEndGameBonusValue: ({ g }) => [
    { vp: 5 * countOf(g.board, "copper") },
    { vp: 5 * countOf(g.board, "white") },
  ],
};
