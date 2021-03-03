import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const DATAPORT_SPECIALIST: Card = {
  name: "Dataport Specialist",
  color: "green",
  coreValue: 9,
  deployAbility:
    "If deployed on Jupiter, reveal the top 2 cards of the deck and place them under this card in any order.",
  endGameBonuses: "{26} if with a Blue.",
  getEndGameBonusValue: ({ p }) => [{ vp: 26, if: isWith(p, "blue") }],
};
