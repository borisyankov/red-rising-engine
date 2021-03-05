import { Card } from '../../types';
import { notWith } from '../../scoring/score';

export const MORNING_STAR: Card = {
  name: 'Morning Star',
  color: 'blue',
  coreValue: 35,
  deployAbility: 'If deployed on Jupiter, advance once on the Fleet Track.',
  endGameBonuses: '{-15} unless with Orion, Virga, or Pelus',
  getEndGameBonusValue: ({ p }) => [
    { vp: -15, if: notWith(p, 'Orion') && notWith(p, 'Virga') && notWith(p, 'Pelus') },
  ],
};
