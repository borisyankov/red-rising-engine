import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { DANCER, DARROW, HOLIDAY, NERO } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Dancer', () => {
  test("is worth 8 VP on it's own", () => {
    const cards = [DANCER];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(8);
  });

  test('is worth nothing extra if with Grays and Golds', () => {
    const cards = [DANCER, NERO, HOLIDAY];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, DANCER);
    expect(vp).toBe(0);
  });

  test('is  worth 11 VP extra if one no Golds but some Grays', () => {
    const cards = [DANCER, HOLIDAY];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, DANCER);
    expect(vp).toBe(11);
  });

  test('is worth 11 VP extra if one no Grays but some Golds', () => {
    const cards = [DANCER, NERO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, DANCER);
    expect(vp).toBe(11);
  });

  test('is worth 11 + 11 VP extra if with no Grays and no Golds', () => {
    const cards = [DANCER, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, DANCER);
    expect(vp).toBe(22);
  });
});
