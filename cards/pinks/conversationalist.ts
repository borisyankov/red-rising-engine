import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const CONVERSATIONALIST: Card = {
  name: 'Conversationalist',
  color: 'pink',
  coreValue: 15,
  deployAbility: "Move the top card from another location to under this card. If it's a White, gain it.",
  endGameBonuses: '15 if with a White.',
  getEndGameBonusValue: ({ p }) => [{ vp: 15, if: isWith(p, 'white') }],
};
