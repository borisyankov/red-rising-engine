import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const deanna: Card = {
  name: "Deanna",
  color: "red",
  coreValue: 9,
  endGameBonuses: "{26} if with another Red.",
  getEndGameBonusValue: ({ p }) => [{ vp: 26, if: isWith(p, "red") }],
};