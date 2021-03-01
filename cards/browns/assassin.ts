import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const assassin: Card = {
  name: "Assassin",
  color: "brown",
  coreValue: 5,
  deployAbility:
    "Banish the card directly under this one. If it's a Gold, place 1 Influence on the Institute.",
  endGameBonuses: "{10} for each Obsidian.",
  getEndGameBonusValue: ({ p }) => [{ vp: 10 * countOf(p, "obsidian") }],
};
