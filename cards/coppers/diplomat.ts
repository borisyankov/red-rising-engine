import { Card } from '../../types';
import { anotherHaveSameInfluence } from '../../scoring/score';

export const DIPLOMAT: Card = {
  name: 'Diplomat',
  color: 'copper',
  coreValue: 16,
  deployAbility: 'You and an opponent of your choice may place 1 Influence on the Institute.',
  endGameBonuses: '{19} if you and any opponent have the exact same amount of Influence on the Institute.',
  getEndGameBonusValue: ({ g, p }) => [{ vp: 19, if: anotherHaveSameInfluence(g, p) }],
};
