import { Player } from '../../../types';
import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { DIPLOMAT } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Diplomat', () => {
  test("is worth 16 VP on it's own", () => {
    const cards = [DIPLOMAT];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(16);
  });

  const player1: Player = {
    ...NULL_PLAYER,
    influence: 3,
  };
  const player2: Player = {
    ...NULL_PLAYER,
    influence: 4,
  };
  const player3: Player = {
    ...NULL_PLAYER,
    influence: 4,
  };

  const player4: Player = {
    ...NULL_PLAYER,
    influence: 5,
  };

  const game = {
    ...NULL_GAME_STATE,
    players: [player1, player2, player3, player4],
  };

  test('is worth 19 VP if any opponent has the same Influence', () => {
    const vp = calculateEndGameBonus(game, player2, DIPLOMAT);
    expect(vp).toBe(19);
  });

  test('is worth nothing if no opponent has the same Influence', () => {
    const vp = calculateEndGameBonus(game, player4, DIPLOMAT);
    expect(vp).toBe(0);
  });
});
