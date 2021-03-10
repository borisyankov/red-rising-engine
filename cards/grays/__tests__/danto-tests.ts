import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { DANTO, TIMONY, DARROW, ORATOR } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Danto', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [DANTO];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  const game = {
    ...NULL_GAME_STATE,
    board: {
      jupiter: [],
      mars: [TIMONY],
      luna: [DARROW],
      theInstitute: [ORATOR],
    },
  };

  test('is worth no extra VP if no card on the board', () => {
    const vp = calculateEndGameBonus(NULL_GAME_STATE, NULL_PLAYER, DANTO);
    expect(vp).toBe(0);
  });

  test('is worth 5 VP for each Copper and White on all locations (on the board)', () => {
    const vp = calculateEndGameBonus(game, NULL_PLAYER, DANTO);
    expect(vp).toBe(10);
  });
});
