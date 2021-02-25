import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const bondilus: Card = {
  name: "Bondilus",
  color: "copper",
  coreValue: 20,
  endGameBonuses: "{5} if you have the Sovereign token. 5 if with a Gold.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 5, if: p.sovereignty },
    { vp: 5, if: isWith(p, "gold") },
  ],
};
