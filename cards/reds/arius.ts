import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const arius: Card = {
  name: "Arius",
  color: "red",
  coreValue: 10,
  deployAbility: "",
  endGameBonuses: "25 if with no Golds.",
  getEndGameBonusValue: ({ p }) => [{ vp: 25, if: countOf(p, "gold") === 0 }],
};
