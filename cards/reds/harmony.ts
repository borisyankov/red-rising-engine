import { Card, PlayerState } from "../../types";
import { countOf } from "../../scoring/score";

export const harmony: Card = {
  name: "Harmony",
  color: "red",
  coreValue: 10,
  endGameBonuses: "{33} if with only Reds, Pinks, Browns and/or Obsidians.",
  getEndGameBonusValue: ({ p }) => [
    {
      vp: 33,
      if:
        countOf(p, "red") +
          countOf(p, "pink") +
          countOf(p, "brown") +
          countOf(p, "obsidian") ===
        p.cards.length,
    },
  ],
};
