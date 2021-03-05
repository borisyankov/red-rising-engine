import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const SEVRO: Card = {
  name: 'Sevro',
  color: 'gold',
  coreValue: 15,
  deployAbility:
    'Banish the card directly under this one. You may reveal The Howlers to instead gain that card.',
  endGameBonuses: '{20} if with Victra, The Howlers, or a Red.',
  getEndGameBonusValue: ({ p }) => [
    { vp: 20, if: isWith(p, 'Victra') || isWith(p, 'The Howlers') || isWith(p, 'red') },
  ],
};
