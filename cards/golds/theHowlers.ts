import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const theHowlers: Card = {
  name: "The Howlers",
  color: "gold",
  coreValue: 20,
  blockAbility:
    "When an opponent tries to steal or banish your cards, reveal this to block them.",
  endGameBonuses: "{15} if with Sevro.",
  getEndGameBonusValue: ({ p }) => [{ vp: 15, if: isWith(p, "Sevro") }],
};
