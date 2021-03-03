import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const BONDILUS: Card = {
  name: "Bondilus",
  color: "copper",
  coreValue: 20,
  deployAbility: "If deployed on Mars, banish 1 non-Gold from this location.",
  endGameBonuses: "{5} if you have the Sovereign token. 5 if with a Gold.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 5, if: p.sovereignty },
    { vp: 5, if: isWith(p, "gold") },
  ],
};
