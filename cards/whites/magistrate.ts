import { Card } from "../../types";

export const magistrate: Card = {
  name: "Magistrate",
  color: "white",
  coreValue: 20,
  deployAbility: "If you have the Sovereign token, gain 1 Helium.",
  endGameBonuses:
    "{15} if you have at least 3 Helium. 3 Influence on the Institute, and level 3 on the Fleet Track.",
  getEndGameBonusValue: ({ p }) => [
    {
      vp: 15,
      if: p.helium >= 3 && p.influence >= 3 && p.fleetTrackPosition >= 3,
    },
  ],
};
