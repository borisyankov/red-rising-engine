import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const GARDEN_TRAINED_ROSE: Card = {
  name: "Garden-trained Rose",
  color: "pink",
  coreValue: 16,
  deployAbility:
    "Move the card directly under this one to the top of another location. It it's a Silver, gain 1 Helium.",
  endGameBonuses: "{14} if with a Silver.",
  getEndGameBonusValue: ({ p }) => [{ vp: 14, if: isWith(p, "silver") }],
};
