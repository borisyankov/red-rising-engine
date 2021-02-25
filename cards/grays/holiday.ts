import { Card } from "../../types";

export const holiday: Card = {
  name: "Holiday",
  color: "gray",
  coreValue: 15,
  deployAbility:
    "You may treat this card as if it is any other color (in addition to Gray).",
  endOfGameAbility:
    "Move an Orange or Blue from any location to directly under this card. You may gain that card; if you do, end your turn.",
  endGameBonuses: "{5} for each Orange & Blue on all locations.",
};
