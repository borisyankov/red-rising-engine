import { Card } from "../../types";

export const uglyDan: Card = {
  name: "Ugly Dan",
  color: "gray",
  coreValue: 20,
  deployAbility:
    "Move a Red or Brown from any location to under this card. You may gain that card; if you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as if it is any one other color (in addition to Gray).",
  endGameBonuses: "{5} for each Red & Brown (on all locations).",
  // TODO: board
};