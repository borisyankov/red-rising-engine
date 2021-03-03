import { Card } from "../../types";
import { isWith, notWith } from "../../scoring/score";

export const LAWYER: Card = {
  name: "Lawyer",
  color: "copper",
  coreValue: 13,
  deployAbility: "Place 1 Influence on the Institute.",
  endGameBonuses:
    "{12} if with a White (not the Judge). {22} if with the Judge.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 12, if: isWith(p, "white") && notWith(p, "The Judge") },
    { vp: 22, if: isWith(p, "The Judge") },
  ],
};
