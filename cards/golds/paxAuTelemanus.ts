import { Card, PlayerState } from "../../types";
import { isWith } from "../../scoring/score";

export const paxAuTelemanus: Card = {
  name: "Pax au Telemanus",
  color: "gold",
  coreValue: 15,
  blockAbility:
    "When an opponent tries to steal or banish your cards, reveal this to block them.",
  endGameBonuses: "{20} if with an Obsidian or Mustang.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 20, if: isWith(p, "obsidian") || isWith(p, "Mustang") },
  ],
};
