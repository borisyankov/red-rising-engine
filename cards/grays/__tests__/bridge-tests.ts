import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { BRIDGE, EVEY, MICKEY_THE_CARVER, PELUS, DARROW, ZANZIBAR, CYTHER } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Bridge', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [BRIDGE];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(15);
  });

  const game = {
    ...NULL_GAME_STATE,
    board: {
      jupiter: [PELUS],
      mars: [EVEY, MICKEY_THE_CARVER],
      luna: [DARROW],
      theInstitute: [ZANZIBAR, CYTHER],
    },
  };

  test('is worth no extra VP if no card on the board', () => {
    const vp = calculateEndGameBonus(NULL_GAME_STATE, NULL_PLAYER, BRIDGE);
    expect(vp).toBe(0);
  });

  test('is worth 5 VP for each Pink and Violet on all locations (on the board)', () => {
    const vp = calculateEndGameBonus(game, NULL_PLAYER, BRIDGE);
    expect(vp).toBe(15);
  });
});
