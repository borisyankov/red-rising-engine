import { Card } from '../../types';
import { haveMostInfluence } from '../../scoring/score';

export const ADMINISTRATOR: Card = {
  name: 'Administrator',
  color: 'copper',
  coreValue: 15,
  deployAbility:
    'If deployed on the Institute, reveal the top 2 cards of the deck and place them under this card in any order.',
  endGameBonuses: '{15} if you have the most Influence on the Institute (or tied for the most).',
  getEndGameBonusValue: ({ g, p }) => [{ vp: 15, if: haveMostInfluence(g, p) }],
};
