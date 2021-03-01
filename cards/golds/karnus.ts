import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const karnus: Card = {
  name: "Karnus",
  color: "gold",
  coreValue: 15,
  deployAbility:
    "Banish the card directly under this one. If the banished card is Mustang, The Jackal or Nero, you may also chose an opponent. If you don, they banish 1 of their cards.",
  endGameBonuses:
    "{30} if with Cassius. -15 if with Mustang, The Jackal, or Nero.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 30, if: isWith(p, "Cassius") },
    {
      vp: -15,
      if: isWith(p, "Mustang") || isWith(p, "The Jackal") || isWith(p, "Nero"),
    },
  ],
};
