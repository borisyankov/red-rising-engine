import { Card } from "../../types";

export const HACKER: Card = {
  name: "Hacker",
  color: "green",
  coreValue: 15,
  deployAbility:
    "Reveal the top card of the deck. Either banish it or place (not deploy) it to the top of another location.",
  endOfGameAbility:
    "Reveal the top card of the deck. Gain points equal to that card's core value.",
};
