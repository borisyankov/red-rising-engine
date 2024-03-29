import { Card } from '../../types';

export const CEO: Card = {
  name: 'CEO',
  color: 'silver',
  coreValue: 12,
  deployAbility: 'You may regress once on the Fleet Track. If you do, gain 2 Helium.',
  endGameBonuses: '{18} if you have at least 5 Helium.',
  getEndGameBonusValue: ({ p }) => [{ vp: 18, if: p.helium >= 5 }],
};
