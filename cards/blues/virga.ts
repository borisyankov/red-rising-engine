import { Card } from "../../types";
import { isFleetTrackPosition } from "../../scoring/score";

export const virga: Card = {
  name: "Virga",
  color: "blue",
  coreValue: 10,
  deployAbility:
    "Advance twice on the Fleet Track, then all other players advance once on the Fleet Track.",
  endGameBonuses:
    "{15} if your Fleet Track position is 6-8. {30} if your Fleet Track position is 9 or 10.",
  getEndGameBonusValue: ({ p }) => [
    { vp: 15, if: isFleetTrackPosition(p, [6, 7, 8]) },
    { vp: 30, if: isFleetTrackPosition(p, [9, 10]) },
  ],
};
