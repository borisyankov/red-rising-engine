import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const TACTUS: Card = {
  name: 'Tactus',
  color: 'gold',
  coreValue: 20,
  deployAbility:
    'You may steal 1 card from an opponent (they choose the card). If you do, banish Tactus and end your turn.',
  endGameBonuses: '{20} if with Octavia, Darrow or a Pink.',
  getEndGameBonusValue: ({ p }) => [
    { vp: 20, if: isWith(p, 'Octavia') || isWith(p, 'Darrow') || isWith(p, 'pink') },
  ],
};
