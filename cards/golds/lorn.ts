import { Card } from "../../types";
import { notWith } from "../../scoring/score";

export const LORN: Card = {
  name: "Lorn",
  color: "gold",
  coreValue: 20,
  deployAbility:
    "If the card directly under this one is a Gold, banish that card.",
  endGameBonuses: "{15} if with no other Golds.",
  getEndGameBonusValue: ({ p }) => [{ vp: 15, if: notWith(p, "gold") }],
};
