import { Card } from '../../types';
import { countOf } from '../../scoring/score';

export const GARDENER: Card = {
  name: 'Gardener',
  color: 'brown',
  coreValue: 10,
  deployAbility:
    'If deployed directly on top of a Violet or Pink, move the card to the top of another location and gain 1 Helium.',
  endGameBonuses: '5 for each Violet & Pink.',
  getEndGameBonusValue: ({ p }) => [{ vp: 5 * countOf(p, 'violet') }, { vp: 5 * countOf(p, 'pink') }],
};
