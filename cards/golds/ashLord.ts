import { Card } from '../../types';
import { countOf } from '../../scoring/score';

export const ASH_LORD: Card = {
  name: 'Ash Lord',
  color: 'gold',
  coreValue: 25,
  deployAbility: 'Banish all Blues from this location. If this banishes 2 or more Blues, regain Ash Lord.',
  endGameBonuses: '{5} for each Blue. {5} for each banished Blue.',
  getEndGameBonusValue: ({ g, p }) => [
    { vp: 5 * countOf(p, 'blue') },
    { vp: 5 * countOf(g.banished, 'blue') },
  ],
};
