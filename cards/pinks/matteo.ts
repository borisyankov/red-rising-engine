import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const MATTEO: Card = {
  name: 'Matteo',
  color: 'pink',
  coreValue: 13,
  deployAbility:
    "Move any other card from this location to the top of another location. If it's a Pink, place 1 Influence token on the Institute.",
  endGameBonuses: '{17} if with a Pink or Quicksilver.',
  getEndGameBonusValue: ({ p }) => [{ vp: 17, if: isWith(p, 'pink') || isWith(p, 'Quicksilver') }],
};
