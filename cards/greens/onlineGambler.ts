import { Card } from "../../types";

export const ONLINE_GAMBLER: Card = {
  name: "Online Gambler",
  color: "green",
  coreValue: 7,
  deployAbility:
    "Name 3 colors, then reveal the top card of the deck. If it matches a color you named, gain it and banish this card. Otherwise, banish the revealed card.",
  endOfGameAbility:
    "Name 1 non-Gold color. Reveal 7 cards from the top of the deck and gain all cards of that color. Shuffle and return the other cards to the top of the deck.",
};
