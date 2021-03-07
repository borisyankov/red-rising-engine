import { Card } from '../../types';
import { haveMostOrTiedForHelium } from '../../scoring/score';

export const REPORTER: Card = {
  name: 'Reporter',
  color: 'violet',
  coreValue: 6,
  deployAbility:
    'If you have more Helium than the player to your right, give them the Reporter, gan the top 2 cards of the deck, then end your turn.',
  endGameBonuses: '{29} if you have the most Helium (or tied for the most).',
  getEndGameBonusValue: ({ g, p }) => [{ vp: 29, if: haveMostOrTiedForHelium(g, p) }],
};
