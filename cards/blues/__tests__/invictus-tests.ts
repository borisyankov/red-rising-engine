import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { INVICTUS } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';
import { Player } from '../../../types';

describe('Invictus', () => {
  test("is worth 19 VP on it's own", () => {
    const cards = [INVICTUS];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(19);
  });

  const player1: Player = {
    ...NULL_PLAYER,
    fleetTrackPosition: 7,
  };
  const player2: Player = {
    ...NULL_PLAYER,
    fleetTrackPosition: 5,
  };
  const game = {
    ...NULL_GAME_STATE,
    players: [player1, player2],
  };

  test('is worth 16 VP extra if most advanced on the Fleet Track (or tied)', () => {
    const vp = calculateEndGameBonus(game, player1, INVICTUS);
    expect(vp).toBe(16);
  });

  test('is -9 if anyone else is ahead on the Fleet Track', () => {
    const vp = calculateEndGameBonus(game, player2, INVICTUS);
    expect(vp).toBe(-9);
  });
});
