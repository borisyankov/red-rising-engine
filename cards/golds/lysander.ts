import { isWith } from "../../scoring/score";
import { Card } from "../../types";

export const lysander: Card = {
  name: "Lysander",
  color: "gold",
  coreValue: 10,
  endGameBonuses: "{20} if you have the Sovereign token, Octavia or Cassius.",
  getEndGameBonusValue: ({ p }) => [
    {
      vp: 20,
      if: p.sovereignty || isWith(p, "Octavia") || isWith(p, "Cassius"),
    },
  ],
};
