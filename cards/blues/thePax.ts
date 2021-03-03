import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const THE_PAX: Card = {
  name: "The Pax",
  color: "blue",
  coreValue: 20,
  deployAbility: "If deployed on Luna, advance once on the Fleet Track.",
  endGameBonuses: "{15} if with Darrow, Sevro, Orion, Virga or Pelus.",
  getEndGameBonusValue: ({ p }) => [
    {
      vp: 15,
      if:
        isWith(p, "Darrow") ||
        isWith(p, "Orion") ||
        isWith(p, "Virga") ||
        isWith(p, "Pelus"),
    },
  ],
};
