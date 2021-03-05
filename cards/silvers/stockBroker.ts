import { Card } from '../../types';

export const STOCK_BROKER: Card = {
  name: 'Stock Broker',
  color: 'silver',
  coreValue: 10,
  deployAbility: 'You may lose 1 Influence fromm the Institute. If you do, gain 2 Helium.',
  endGameBonuses: '{5} for each Helium (max 25 points).',
  getEndGameBonusValue: ({ p }) => [{ vp: Math.min(p.helium * 5, 25) }],
};
