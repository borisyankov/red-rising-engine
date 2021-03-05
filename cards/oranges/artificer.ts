import { Card } from '../../types';
import { countOf, isWith } from '../../scoring/score';

export const ARTIFICER: Card = {
  name: 'Artificer',
  color: 'orange',
  coreValue: 10,
  deployAbility: 'You may gain a Gold or any other Orange from this location. If you do, end your turn.',
  endOfGameAbility: 'You may treat this card as having the same name as any specific character.',
  endGameBonuses: '{20} if with both another Orange and a Gold.',
  getEndGameBonusValue: ({ p }) => [{ vp: 20, if: countOf(p, 'orange') >= 2 && isWith(p, 'gold') }],
};
