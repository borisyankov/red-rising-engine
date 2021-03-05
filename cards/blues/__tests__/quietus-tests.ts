import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { QUIETUS } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';
import { Player } from '../../../types';

describe('Quietus', () => {
  test("is worth 14 VP on it's own", () => {
    const cards = [QUIETUS];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(14);
  });

  const player1: Player = {
    ...NULL_PLAYER,
    influence: 7,
  };
  const player2: Player = {
    ...NULL_PLAYER,
    influence: 5,
  };
  const game = {
    ...NULL_GAME_STATE,
    players: [player1, player2],
  };

  test('is worth 16 VP if the most Influence on the Institute (or tied)', () => {
    const vp = calculateEndGameBonus(game, player1, QUIETUS);
    expect(vp).toBe(16);
  });

  test('is not worthy anything extra 16 VP if someone else has more Influence', () => {
    const vp = calculateEndGameBonus(game, player2, QUIETUS);
    expect(vp).toBe(0);
  });
});
