import { Card } from '../../types';
import { countOf, isWith } from '../../scoring/score';

export const SEFI: Card = {
  name: 'Sefi',
  color: 'obsidian',
  coreValue: 20,
  deployAbility: 'Gain another Obsidian from this location.',
  endGameBonuses: '{20} if with Ragnar. {-5} for each Gold.',
  getEndGameBonusValue: ({ p }) => [{ vp: 20, if: isWith(p, 'Ragnar') }, { vp: -5 * countOf(p, 'gold') }],
};
