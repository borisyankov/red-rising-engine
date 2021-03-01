import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const theTelemanuses: Card = {
  name: "The Telemanuses",
  color: "gold",
  coreValue: 20,
  deployAbility:
    "Move all cards under this card from this location to the top of another location in the same order.",
  endGameBonuses: "{15} if with Pax au Telemanus or The Pax.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 15, if: isWith(p, "Pax au Telemanus") || isWith(p, "The Pax") },
  ],
};
