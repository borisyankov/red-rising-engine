import { Card } from '../../types';
import { countOf } from '../../scoring/score';

export const BRIDGE: Card = {
  name: 'Bridge',
  color: 'gray',
  coreValue: 15,
  deployAbility:
    'Move a Pink or Violet from any location to directly under this card. You may gain that card; if you do, end your turn.',
  endOfGameAbility: 'You may treat this card as if it is any one other color (in addition to Gray).',
  endGameBonuses: '{5} for each Pink & Violet on all locations.',
  getEndGameBonusValue: ({ g }) => [
    { vp: 5 * countOf(g.board, 'pink') },
    { vp: 5 * countOf(g.board, 'violet') },
  ],
};
