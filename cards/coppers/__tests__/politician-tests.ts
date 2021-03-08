import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { POLITICIAN } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';
import { Player } from '../../../types';

describe('Politician', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [POLITICIAN];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(15);
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
  test('is worth 15 VP if the most Influence on the Institute (or tied)', () => {
    const vp = calculateEndGameBonus(game, player1, POLITICIAN);
    expect(vp).toBe(15);
  });

  test('is not worthy anything if someone else has more Influence', () => {
    const vp = calculateEndGameBonus(game, player2, POLITICIAN);
    expect(vp).toBe(0);
  });
});
