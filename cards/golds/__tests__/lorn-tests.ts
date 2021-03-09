import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { LORN, DARROW, EO, NERO } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Lorn', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [LORN];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(20);
  });

  test('is worth 15 VP extra if no other Gold', () => {
    const cards = [LORN, DARROW, EO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, LORN);
    expect(vp).toBe(15);
  });

  test('is not worth anything extra if with another Gold', () => {
    const cards = [LORN, NERO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, LORN);
    expect(vp).toBe(0);
  });
});
