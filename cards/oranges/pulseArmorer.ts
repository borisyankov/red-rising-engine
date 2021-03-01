import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const pulseArmorer: Card = {
  name: "Pulse Armorer",
  color: "orange",
  coreValue: 13,
  deployAbility:
    "You may gain a Gray from this location. If you do, end your turn.",
  endOfGameAbility:
    "You may treat this card as having the same name as any specific character.",
  endGameBonuses: "{17} if with a Gray.",
  getEndGameBonusValue: ({ p }) => [{ vp: 17, if: isWith(p, "gray") }],
};
