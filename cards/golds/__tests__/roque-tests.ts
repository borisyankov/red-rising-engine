import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { ROQUE, DARROW, NERO, THE_PAX, QUIETUS, REPORTER, ROMULUS, MORNING_STAR } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Roque', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [ROQUE];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(20);
  });

  test('is worth 5 VP extra for each Blue', () => {
    const cards = [ROQUE, THE_PAX, DARROW, QUIETUS, REPORTER, MORNING_STAR];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ROQUE);
    expect(vp).toBe(15);
  });

  test('is not worth anything extra if with no Blues', () => {
    const cards = [ROQUE, NERO, ROMULUS];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ROQUE);
    expect(vp).toBe(0);
  });
});
