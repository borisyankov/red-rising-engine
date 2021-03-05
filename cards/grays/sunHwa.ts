import { Card } from '../../types';
import { countOf } from '../../scoring/score';

export const SUN_HWA: Card = {
  name: 'Sun Hwa',
  color: 'gray',
  coreValue: 15,
  deployAbility:
    'Move an Obsidian or Green from any location or directly under this card. You may gain that card; if you do, end your turn.',
  endOfGameAbility: 'You may treat this card as if it is any other color (in addition to Gray).',
  endGameBonuses: '{5} for each Obsidian & Green (on all locations).',
  getEndGameBonusValue: ({ g }) => [
    { vp: countOf(g.board, 'obsidian') * 5 },
    { vp: countOf(g.board, 'green') * 5 },
  ],
};
