import { Card } from '../../types';
import { isFleetTrackPosition } from '../../scoring/score';

export const PELUS: Card = {
  name: 'Pelus',
  color: 'blue',
  coreValue: 5,
  deployAbility: 'Advance twice on the Fleet Track, then all other players advance once on the Fleet Track.',
  endGameBonuses: '{20} if your Fleet Track position is 5-7. {35} if your Fleet Track position is 8-10.',
  getEndGameBonusValue: ({ p }) => [
    { vp: 20, if: isFleetTrackPosition(p, [5, 6, 7]) },
    { vp: 35, if: isFleetTrackPosition(p, [8, 9, 10]) },
  ],
};
