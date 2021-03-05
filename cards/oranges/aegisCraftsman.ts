import { Card } from '../../types';
import { isWith, notWith } from '../../scoring/score';

export const AEGIS_CRAFTSMAN: Card = {
  name: 'Aegis Craftsman',
  color: 'orange',
  coreValue: 15,
  deployAbility: 'You may gain a Gold from this location. If you do, end your turn.',
  endOfGameAbility: 'You may treat this card as having the same name as any specific character.',
  endGameBonuses: '{10} if with a Gold. {10} if with no Obsidians.',
  getEndGameBonusValue: ({ p }) => [
    { vp: 10, if: isWith(p, 'gold') },
    { vp: 10, if: notWith(p, 'obsidian') },
  ],
};
