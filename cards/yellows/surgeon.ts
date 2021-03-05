import { Card } from '../../types';
import { countOf } from '../../scoring/score';

export const SURGEON: Card = {
  name: 'Surgeon',
  color: 'yellow',
  coreValue: 0,
  deployAbility: 'You may banish a non-Gold from your hand and gain a banished Gold.',
  endOfGameAbility: 'Gain any 1 banished Gold.',
  endGameBonuses: '{5} for each Gold.',
  getEndGameBonusValue: ({ p }) => [{ vp: 5 * countOf(p, 'gold') }],
};
