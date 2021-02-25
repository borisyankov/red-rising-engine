import { Card } from "../../types";

export const seer: Card = {
  name: "Seer",
  color: "white",
  coreValue: 19,
  deployAbility:
    "If you have the Sovereign token, reveal the top card of the deck and place (not deploy) it on another location.",
  endGameBonuses: "{11} if you have the Sovereign token.",
  getEndGameBonusValue: ({ p }) => [{ vp: 11, if: p.sovereignty }],
};
