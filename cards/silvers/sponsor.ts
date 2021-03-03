import { Card } from "../../types";

export const SPONSOR: Card = {
  name: "Sponsor",
  color: "silver",
  coreValue: 20,
  deployAbility: "You may pay 1 Helium to place 2 Influence on the Institute.",
  endGameBonuses: "{2} for each of your Influence tokens on the Institute.",
  getEndGameBonusValue: ({ p }) => [{ vp: 2 * p.influence }],
};
