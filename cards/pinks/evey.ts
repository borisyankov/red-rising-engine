import { isWith } from "../../scoring/score";
import { Card, PlayerState } from "../../types";

export const evey: Card = {
  name: "Evey",
  color: "pink",
  coreValue: 15,
  deployAbility:
    "Banish Evey and all cards at this location. For each Gold banished, place 1 Influence token on the Institute (max 3).",
  endGameBonuses: "{15} if with Darrow. {-15} if with Mickey",
  getEndGameBonusValue: ({ p }) => [
    { vp: 15, if: isWith(p, "Darrow") },
    { vp: -15, if: isWith(p, "Mickey") },
  ],
};