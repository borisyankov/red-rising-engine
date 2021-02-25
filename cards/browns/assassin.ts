import { Card, PlayerState } from "../../types";
import { countOf } from "../../scoring/score";

export const assassin: Card = {
  name: "Assassin",
  color: "brown",
  coreValue: 5,
  endGameBonuses: "{10} for each Obsidian.",
  getEndGameBonusValue: ({ p }) => [{ vp: countOf(p, "obsidian") * 10 }],
};
