import { Card } from "../../types";
import { notWith } from "../../scoring/score";

export const octavia: Card = {
  name: "Octavia",
  color: "gold",
  coreValue: 30,
  deployAbility:
    "If you have the Sovereign token, gain the bottom card on Luna (if it's not this card); banish Octavia unless that card is a Gold.",
  endGameBonuses:
    "{-30} if you don't have either the Sovereign token or Lysander.",
  getEndGameBonusValue: ({ p }) => [
    { vp: -30, if: !p.sovereignty && notWith(p, "Lysander") },
  ],
};
