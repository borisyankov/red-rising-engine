import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const THEODORA: Card = {
  name: 'Theodora',
  color: 'pink',
  coreValue: 16,
  deployAbility:
    "You may move the bottom card of this location on top of this card. If it's a Gold or Red, gain it, then end your turn.",
  endGameBonuses: '{14} if with a Gold or Red (but not both).',
  getEndGameBonusValue: ({ p }) => [
    {
      vp: 14,
      if: isWith(p, 'gold') || (isWith(p, 'red') && !(isWith(p, 'gold') && isWith(p, 'red'))),
    },
  ],
};
