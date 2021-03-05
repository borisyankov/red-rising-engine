import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const FITCHNER: Card = {
  name: 'Fitchner',
  color: 'gold',
  coreValue: 25,
  deployAbility: 'If deployed to the Institute, place 1 Influence there.',
  endGameBonuses: '{10} if with a Red. {10} if with Servo.',
  getEndGameBonusValue: ({ p }) => [
    { vp: 10, if: isWith(p, 'red') },
    { vp: 10, if: isWith(p, 'Servo') },
  ],
};
