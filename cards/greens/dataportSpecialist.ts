import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const dataportSpecialist: Card = {
  name: "Dataport Specialist",
  color: "green",
  coreValue: 9,
  endGameBonuses: "{26} if with a Blue.",
  getEndGameBonusValue: ({ p }) => [{ vp: 26, if: isWith(p, "blue") }],
};
