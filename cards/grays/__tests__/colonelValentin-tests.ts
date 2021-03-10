import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { COLONEL_VALENTIN, NERO, EVEY, DARROW, MUSTANG, CASSIUS, SEVRO } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Colonel Valentin', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [COLONEL_VALENTIN];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  const game = {
    ...NULL_GAME_STATE,
    board: {
      jupiter: [NERO],
      mars: [EVEY, MUSTANG],
      luna: [DARROW, CASSIUS],
      theInstitute: [SEVRO],
    },
  };

  test('is worth no extra VP if no card on the board', () => {
    const vp = calculateEndGameBonus(NULL_GAME_STATE, NULL_PLAYER, COLONEL_VALENTIN);
    expect(vp).toBe(0);
  });

  test('is worth 5 VP for each Gold on all locations (on the board)', () => {
    const vp = calculateEndGameBonus(game, NULL_PLAYER, COLONEL_VALENTIN);
    expect(vp).toBe(20);
  });
});
