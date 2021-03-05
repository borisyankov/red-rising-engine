import { Card } from '../../types';
import { isWith } from '../../scoring/score';

export const ORION: Card = {
  name: 'Orion',
  color: 'blue',
  coreValue: 18,
  deployAbility:
    'If this is deployed on Mars, Luna or The Institute, deploy one other Blue from this location to Jupiter.',
  endGameBonuses:
    '{10} if with Pax au Telemanus or The Pax. {?} Gain points equal to your position on the Fleet Track (0-10).',
  getEndGameBonusValue: ({ p }) => [
    { vp: 10, if: isWith(p, 'Pax au Telemanus') || isWith(p, 'The Pax') },
    { vp: p.fleetTrackPosition },
  ],
};
