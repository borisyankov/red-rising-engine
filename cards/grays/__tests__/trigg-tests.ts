import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { BRIDGE, DANTO, HYPNOTIST, PATHOLOGIST, SURGEON, TRIGG } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Trigg', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [TRIGG];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(15);
  });

  const game = {
    ...NULL_GAME_STATE,
    board: {
      jupiter: [SURGEON],
      mars: [DANTO],
      luna: [BRIDGE, PATHOLOGIST],
      theInstitute: [HYPNOTIST],
    },
  };

  test('is worth no extra VP if no card on the board', () => {
    const vp = calculateEndGameBonus(NULL_GAME_STATE, NULL_PLAYER, TRIGG);
    expect(vp).toBe(0);
  });

  test('is worth 5 VP for each Gray and Yellow on all locations (on the board)', () => {
    const vp = calculateEndGameBonus(game, NULL_PLAYER, TRIGG);
    expect(vp).toBe(25);
  });
});
