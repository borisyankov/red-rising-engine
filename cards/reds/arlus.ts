import { Card } from "../../types";
import { notWith } from "../../scoring/score";

export const ARLUS: Card = {
  name: "Arlus",
  color: "red",
  coreValue: 10,
  deployAbility:
    "Each neighboring player reveals a random card from their hand. If it is Gold, banish that card. If it is Red, banish Arlus.",
  endGameBonuses: "{25} if with no Golds.",
  getEndGameBonusValue: ({ p }) => [{ vp: 25, if: notWith(p, "gold") }],
};
