import { Card } from "../../types";
import { isFirstOnFleetTrack } from "../../scoring/score";

export const vlogger: Card = {
  name: "Vlogger",
  color: "violet",
  coreValue: 7,
  endGameBonuses:
    "{23} if you are the furthest on the Fleet track (or tied for the furthest).",
  getEndGameBonusValue: ({ g, p }) => [
    { vp: 23, if: isFirstOnFleetTrack(g, p) },
  ],
};
