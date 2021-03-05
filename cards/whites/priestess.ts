import { Card } from '../../types';

export const PRIESTESS: Card = {
  name: 'Priestess',
  color: 'white',
  coreValue: 20,
  deployAbility: 'If you have the Sovereign token, advance once on the Fleet Track.',
  endGameBonuses: '{20} if with only cards having core values of at least 20 points.',
  getEndGameBonusValue: ({ p }) => [{ vp: 20, if: p.cards.every((card) => card.coreValue >= 20) }],
};
