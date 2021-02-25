import { Card, PlayerState } from "../../types";
import { countOf, isWith } from "../../scoring/score";

export const antonia: Card = {
  name: "Antonia",
  color: "gold",
  coreValue: 15,
  deployAbility:
    "Choose an opponent. They banish 1 of their cards. Then, banish Antonia.",
  endGameBonuses:
    "{15} if with The Jackal or 2 other Golds. {-10} if with Victra or Sevro.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 15, if: isWith(p, "The Jackal") || countOf(p, "gold") === 3 },
    { vp: -10, if: isWith(p, "Victra") || isWith(p, "Sevro") },
  ],
};
