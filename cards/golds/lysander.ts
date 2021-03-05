import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const LYSANDER: Card = {
  name: 'Lysander',
  color: 'gold',
  coreValue: 10,
  deployAbility: 'Gain the top card of the deck. Banish Lysander unless you deployed him on Luna.',
  endGameBonuses: '{20} if you have the Sovereign token, Octavia or Cassius.',
  getEndGameBonusValue: ({ p }) => [
    {
      vp: 20,
      if: p.sovereignty || isWith(p, 'Octavia') || isWith(p, 'Cassius'),
    },
  ],
};
