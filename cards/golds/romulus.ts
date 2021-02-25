import { isWith, notWith } from "../../scoring/score";
import { Card } from "../../types";

export const romulus: Card = {
  name: "Romulus",
  color: "gold",
  coreValue: 25,
  endGameBonuses:
    "{15} if you have the Sovereign Token. {-25} if with Roque or Octavia or without a Blue.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 15, if: p.sovereignty },
    {
      vp: -25,
      if: isWith(p, "Roque") || isWith(p, "Octavia") || notWith(p, "blue"),
    },
  ],
};
