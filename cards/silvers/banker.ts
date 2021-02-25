import { Card } from "../../types";

export const banker: Card = {
  name: "Banker",
  color: "silver",
  coreValue: 10,
  deployAbility:
    "You may pay 3 Helium to gain any card from this location. If you do, banish Banker.",
  endGameBonuses: "You may pay 3 Helium to gain the top card of any location.",
};
