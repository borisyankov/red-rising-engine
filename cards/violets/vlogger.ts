import { Card } from '../../types';
import { isFurthestOrTiedOnFleetTrack } from '../../scoring/score';

export const VLOGGER: Card = {
  name: 'Vlogger',
  color: 'violet',
  coreValue: 7,
  deployAbility:
    "If you're further on the Fleet Track than the player to your right, give them the Vlogger, gain the top 2 cards of the deck, then end your turn.",
  endGameBonuses: '{23} if you are the furthest on the Fleet track (or tied for the furthest).',
  getEndGameBonusValue: ({ g, p }) => [{ vp: 23, if: isFurthestOrTiedOnFleetTrack(g, p) }],
};
