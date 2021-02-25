import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const theodora: Card = {
  name: "Theodora",
  color: "pink",
  coreValue: 16,
  endGameBonuses: "{14} if with a Gold or Red (but not both).",
  getEndGameBonusValue: ({ p }) => [
    {
      vp: 14,
      if:
        isWith(p, "gold") ||
        (isWith(p, "red") && !(isWith(p, "gold") && isWith(p, "red"))),
    },
  ],
};
