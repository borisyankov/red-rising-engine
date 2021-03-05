import { Card } from '../../types';

export const TIMONY: Card = {
  name: 'Timony',
  color: 'copper',
  coreValue: 10,
  deployAbility: 'For each Gold at the Institute, place 1 Influence Token there.',
  endGameBonuses: '{3} for each of your influence tokens on the Institute.',
  getEndGameBonusValue: ({ p }) => [{ vp: 3 * p.influence }],
};
