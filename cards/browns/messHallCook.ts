import { Card } from '../../types';
import { countOf } from '../../scoring/score';

export const MESS_HALL_COOK: Card = {
  name: 'Mess Hall Cook',
  color: 'brown',
  coreValue: 10,
  deployAbility:
    'If deployed directly on top of a Gray or Orange, move that card to the top of another location and advance once on the Fleet Track.',
  endGameBonuses: '{5} for each Gray and Orange.',
  getEndGameBonusValue: ({ p }) => [{ vp: 5 * countOf(p, 'gray') }, { vp: 5 * countOf(p, 'orange') }],
};
