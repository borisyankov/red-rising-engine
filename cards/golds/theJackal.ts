import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const THE_JACKAL: Card = {
  name: 'The Jackal',
  color: 'gold',
  coreValue: 10,
  deployAbility: 'Gain the Sovereign token.',
  endGameBonuses: '{30} if you have the Sovereign Token. {-30} if with Darrow or Octavia.',
  getEndGameBonusValue: ({ p }) => [
    { vp: 30, if: p.sovereignty },
    { vp: -30, if: isWith(p, 'Darrow') || isWith(p, 'Octavia') },
  ],
};
