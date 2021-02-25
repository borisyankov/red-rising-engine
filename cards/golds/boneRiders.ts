import { isWith } from "../../scoring/score";
import { Card } from "../../types";

export const boneRiders: Card = {
  name: "Bone Riders",
  color: "gold",
  coreValue: 15,
  deployAbility: "Gain the Sovereign token.",
  endGameBonuses: "{15} if with The Jackal or a Gray.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 15, if: isWith(p, "The Jackal") || isWith(p, "gray") },
  ],
};
