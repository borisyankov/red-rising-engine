import { Card } from "../../types";
import { countOf } from "../../scoring/score";

export const modjob: Card = {
  name: "Modjob",
  color: "brown",
  coreValue: 10,
  deployAbility:
    "If deployed directly on top of a Red or Brown, deploy that card to the top of another location.",
  endGameBonuses: "{5} for each Red and Brown (including Modjob).",
  getEndGameBonusValue: ({ p }) => [
    { vp: 5 * countOf(p, "red") },
    { vp: 5 * countOf(p, "brown") },
  ],
};
