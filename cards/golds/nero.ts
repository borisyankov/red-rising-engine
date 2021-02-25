import { isWith } from "../../scoring/score";
import { Card } from "../../types";

export const nero: Card = {
  name: "Nero",
  color: "gold",
  coreValue: 25,
  deployAbility: "Gain 1 Helium for each Red at this location.",
  endGameBonuses:
    "{10} if you have the Sovereign token. {-5} each for Cassius, Karnus and Octavia.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 10, if: p.sovereignty },
    { vp: -5, if: isWith(p, "Cassius") },
    { vp: -5, if: isWith(p, "Karnus") },
    { vp: -5, if: isWith(p, "Octavia") },
  ],
};
