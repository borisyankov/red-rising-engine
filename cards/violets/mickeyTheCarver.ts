import { isWith } from '../../scoring/score';
import { Card } from '../../types';

export const MICKEY_THE_CARVER: Card = {
  name: 'Mickey the Carver',
  color: 'violet',
  coreValue: 15,
  deployAbility:
    'You may banish a Red from your hand. If you do, reveal cards from the deck until you find a Gold. Gain it and place the revealed cards at the bottom of the deck in any order.',
  endGameBonuses: '{10} if there is at least 1 banished Red. {10} if with a Gold.',
  getEndGameBonusValue: ({ g, p }) => [
    { vp: 10, if: isWith(g.banished, 'red') },
    { vp: 10, if: isWith(p, 'gold') },
  ],
};
