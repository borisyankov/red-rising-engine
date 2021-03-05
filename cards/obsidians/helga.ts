import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const HELGA: Card = {
  name: 'Helga',
  color: 'obsidian',
  coreValue: 14,
  deployAbility:
    'Banish the card directly under this one. If it was the only other card on this location, gain 1 Helium.',
  endGameBonuses: '{16} if with Pax au Telemanus or The Pax.',
  getEndGameBonusValue: ({ p }) => [{ vp: 16, if: isWith(p, 'Pax au Telemanus') || isWith(p, 'The Pax') }],
};
