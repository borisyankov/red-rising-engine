import { isWith } from "../../scoring/score";
import { Card } from "../../types";

export const gravbootCobbler: Card = {
  name: "Gravboot Cobbler",
  color: "orange",
  coreValue: 16,
  deployAbility:
    "You may gain a Gold or Gray from this location. If you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as having the same name as any specific character.",
  endGameBonuses: "{14} if with a Gold or Gray.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 18, if: isWith(p, "gold") || isWith(p, "gray") },
  ],
};
