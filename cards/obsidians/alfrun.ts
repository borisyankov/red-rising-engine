import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const alfrun: Card = {
  name: "Alfrun",
  color: "obsidian",
  coreValue: 10,
  deployAbility:
    "You may gain Nero or Jopho from this location. If you do, regain Alfrun and end your turn.",
  endGameBonuses: "{10} if with Nero. {10} if with Jopho.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 10, if: isWith(p, "Nero") },
    { vp: 10, if: isWith(p, "Jopho") },
  ],
};
