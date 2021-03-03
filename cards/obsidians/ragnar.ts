import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const RAGNAR: Card = {
  name: "Ragnar",
  color: "obsidian",
  coreValue: 20,
  deployAbility:
    "Banish the top card of another location. If it's a Gold or a Gray, place 1 Influence on the Institute.",
  endGameBonuses: "{10} if with an Orange. {10} if with Sefi",
  getEndGameBonusValue: ({ p }) => [
    { vp: 10, if: isWith(p, "orange") },
    { vp: 10, if: isWith(p, "Sefi") },
  ],
};
