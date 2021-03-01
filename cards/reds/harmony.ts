import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const harmony: Card = {
  name: "Harmony",
  color: "red",
  coreValue: 7,
  deployAbility: "An opponent of your choice loses 1 Helium.",
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
