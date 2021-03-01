import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const aliaSnowsparrow: Card = {
  name: "Alia Snowsparrow",
  color: "obsidian",
  coreValue: 16,
  deployAbility:
    "Banish the top non-Gold card from any other location. If it's not Gray or Obsidian, gain 1 Helium,",
  endGameBonuses: "{24} if only with Golds, Grays and/or Obsidians.",
  getEndGameBonusValue: ({ p }) => [
    {
      vp: 24,
      if:
        countOf(p, "gold") + countOf(p, "gray") + countOf(p, "obsidian") ===
        p.cards.length,
    },
  ],
};
