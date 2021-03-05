import { isWith, notWith } from '../../scoring/score';
import { Card } from '../../types';

export const ROMULUS: Card = {
  name: 'Romulus',
  color: 'gold',
  coreValue: 25,
  deployAbility:
    'Gain 1 Blue from this location. Banish Romulus unless you deployed him directly on top of a Gold.',
  endGameBonuses: '{15} if you have the Sovereign Token. {-25} if with Roque or Octavia or without a Blue.',
  getEndGameBonusValue: ({ p }) => [
    { vp: 15, if: p.sovereignty },
    { vp: -25, if: isWith(p, 'Roque') || isWith(p, 'Octavia') || notWith(p, 'blue') },
  ],
};
