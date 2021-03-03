import { Card } from "../../types";
import { isWith } from "../../scoring/score";

export const CALLIOPE: Card = {
  name: "Calliope",
  color: "pink",
  coreValue: 15,
  deployAbility:
    "Reveal the top card of the deck, then deploy it face-up on another location.",
  endGameBonuses: "20 if with The Jackal.",
  getEndGameBonusValue: ({ p }) => [{ vp: 20, if: isWith(p, "The Jackal") }],
};
