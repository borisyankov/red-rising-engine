import { Card } from '../../types';

export const ORATOR: Card = {
  name: 'Orator',
  color: 'white',
  coreValue: 19,
  deployAbility: 'If you have the Sovereign token, place 1 Influence on the Institute.',
  endGameBonuses: "{21} if you don't have the Sovereign token.",
  getEndGameBonusValue: ({ p }) => [{ vp: 21, if: !p.sovereignty }],
};
