import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const stained: Card = {
  name: "Stained",
  color: "obsidian",
  coreValue: 15,
  deployAbility:
    "Banish any other card from this location. If it's an Obsidian, place 1 Influence on the Institute.",
  endGameBonuses: "{15} if this is your only Obsidian.",
  getEndGameBonusValue: ({ p }) => [{ vp: 15, if: isWith(p, "obsidian") }],
};
