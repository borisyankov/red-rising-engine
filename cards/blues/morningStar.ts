import { Card } from "../../types";
import { notWith } from "../../scoring/score";

export const morningStar: Card = {
  name: "Morning Star",
  color: "blue",
  coreValue: 35,
  endGameBonuses: "{-15} unless with Orion ......",
  getEndGameBonusValue: ({ p }) => [{ vp: -15, if: notWith(p, "Orion") }],
};
