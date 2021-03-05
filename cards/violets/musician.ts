import { Card } from '../../types';

export const MUSICIAN: Card = {
  name: 'Musician',
  color: 'violet',
  coreValue: 8,
  deployAbility: 'Move a card with an even core value from this location to the top of another location.',
  endGameBonuses: '{32} if the core value of each of your cards is an even number.',
  getEndGameBonusValue: ({ p }) => [{ vp: 32, if: p.cards.every((card) => card.coreValue % 2 === 0) }],
};
