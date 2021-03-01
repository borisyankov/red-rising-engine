import { Card } from "../../types";
import { isFurthestOrTiedOnFleetTrack } from "../../scoring/score";

export const invictus: Card = {
  name: "Administrator",
  color: "copper",
  coreValue: 19,
  deployAbility: "If deployed on Mars, advance once on the Fleet Track.",
  endGameBonuses:
    "{16} if you are the most advanced on the Fleet Track (or tied for the most). {-9} if an opponent is more advanced on the Fleet Track.",
  getEndGameBonusValue: ({ g, p }) => [
    { vp: 16, if: isFurthestOrTiedOnFleetTrack(g, p) },
    { vp: -9, if: !isFurthestOrTiedOnFleetTrack(g, p) },
  ],
};
