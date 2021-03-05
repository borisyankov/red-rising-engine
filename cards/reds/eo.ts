import { Card } from '../../types';
import { countOf } from '../../scoring/score';

export const EO: Card = {
  name: 'Eo',
  color: 'red',
  coreValue: 10,
  deployAbility: "Each opponent must reveal a Red. If they can't, they lose 1 Helium.",
  endGameBonuses: '{10} for each other Red. {-10} if with a Gray except Bridge.',
  getEndGameBonusValue: ({ p }) => [
    { vp: (countOf(p, 'red') - 1) * 10 },
    { vp: -10, if: countOf(p, 'gray') - countOf(p, 'Bridge') > 0 },
  ],
};
