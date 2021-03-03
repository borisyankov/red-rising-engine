import { Card } from "../../types";

export const LOAN_SHARK: Card = {
  name: "Loan Shark",
  color: "silver",
  coreValue: 13,
  deployAbility:
    "Choose an opponent. They may give you 2 Helium to immediately take 1 turn out of order (but may not gain Loan Shark) before you finish your turn. Otherwise they must give you 1 Helium.",
  endGameBonuses: "{7} if you have at least 7 cards",
  getEndGameBonusValue: ({ p }) => [{ vp: 7, if: p.cards.length >= 7 }],
};
