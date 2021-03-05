import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const VICTRA: Card = {
  name: 'Victra',
  color: 'gold',
  coreValue: 20,
  deployAbility:
    "Gain the bottom card of this location (if it's not this card). Banish Victra unless you deployed her on a Gold.",
  endGameBonuses: '{10} if with the Howlers. {10} if with Sevro or Darrow.',
  getEndGameBonusValue: ({ p }) => [
    { vp: 11, if: isWith(p, 'The Howlers') },
    { vp: 11, if: isWith(p, 'Sevro') || isWith(p, 'Darrow') },
  ],
};
