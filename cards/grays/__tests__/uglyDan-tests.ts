import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { DANCER, DARROW, EO, NANNY, UGLY_DAN } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Ugly Dan', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [UGLY_DAN];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(20);
  });

  const game = {
    ...NULL_GAME_STATE,
    board: {
      jupiter: [NANNY],
      mars: [EO],
      luna: [DANCER],
      theInstitute: [DARROW],
    },
  };

  test('is worth no extra VP if no card on the board', () => {
    const vp = calculateEndGameBonus(NULL_GAME_STATE, NULL_PLAYER, UGLY_DAN);
    expect(vp).toBe(0);
  });

  test('is worth 5 VP for each Red and Brown on all locations (on the board)', () => {
    const vp = calculateEndGameBonus(game, NULL_PLAYER, UGLY_DAN);
    expect(vp).toBe(20);
  });
});
