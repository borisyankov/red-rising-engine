import { Card } from "../../types";

export const firewallExpert: Card = {
  name: "Firewall Expert",
  color: "green",
  coreValue: 13,
  deployAbility:
    "Look at the top 3 cards of the deck. Place 1 of them face down at the top of each location. These cards are considered colorless while they are face down.",
  endGameBonuses:
    "{22} if there is at least 1 location with no cards or where the top card is face down.",
};
