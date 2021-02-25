import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const holoDesigner: Card = {
  name: "Holo Designer",
  color: "green",
  coreValue: 7,
  deployAbility:
    "If deployed on Luna, reveal the top 2 cards of the deck and place them under this card in any order.",
  endGameBonuses: "{28} if with a Violet",
  getEndGameBonusValue: ({ p }) => [{ vp: 28, if: isWith(p, "violet") }],
};
