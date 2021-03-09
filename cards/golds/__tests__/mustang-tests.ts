import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { MUSTANG, DARROW, LORN, OCTAVIA, NERO, JANITOR, TIMONY, DEVELOPER, CEO, DANTO } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Mustang', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [MUSTANG];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(20);
  });

  test('is worth just 5 alone as it is just one color', () => {
    const cards = [MUSTANG];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, MUSTANG);
    expect(vp).toBe(5);
  });

  test('worth 5 VP if only with Gold', () => {
    const cards = [MUSTANG, LORN, OCTAVIA, NERO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, MUSTANG);
    expect(vp).toBe(5);
  });

  test('is worth 5 * 7 VP for 7 different colors', () => {
    const cards = [MUSTANG, DARROW, JANITOR, TIMONY, DEVELOPER, CEO, DANTO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, MUSTANG);
    expect(vp).toBe(35);
  });
});
