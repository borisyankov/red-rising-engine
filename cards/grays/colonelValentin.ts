import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const colonelValentin: Card = {
  name: "Colonel Valentin",
  color: "gray",
  coreValue: 10,
  deployAbility:
    "Move a Gold from any location to directly under this card. You may gain that card; if you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as if it is any one other color (in addition to Gray).",
  endGameBonuses: "{5} for each Gold on all locations.",
  getEndGameBonusValue: ({ g }) => [{ vp: 5 * countOf(g.board, "gold") }],
};
