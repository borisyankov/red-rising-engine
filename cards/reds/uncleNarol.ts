import { Card } from '../../types';

export const UNCLE_NAROL: Card = {
  name: 'Uncle Narol',
  color: 'red',
  coreValue: 10,
  deployAbility: 'Gain 2 Helium.',
  endGameBonuses: '{40} if with only cards having core values of 10 points or less.',
  getEndGameBonusValue: ({ p }) => [{ vp: 40, if: p.cards.every((card) => card.coreValue <= 10) }],
};
