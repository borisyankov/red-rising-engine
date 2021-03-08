import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { ARLUS, BRIDGE, DANCER, DARROW, DEANNA, EO, HARMONY, HOLIDAY, UNCLE_NAROL } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Eo', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [EO];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  test('is worth maximum VP of 60 with all other reds', () => {
    const cards = [ARLUS, DANCER, DARROW, DEANNA, EO, HARMONY, UNCLE_NAROL];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, EO);
    expect(vp).toBe(60);
  });

  test('is worth -10 VP if with a Gray', () => {
    const cards = [EO, HOLIDAY];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, EO);
    expect(vp).toBe(-10);
  });

  test('is not worth any negative VP if with Bridge', () => {
    const cards = [EO, BRIDGE];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, EO);
    expect(vp).toBe(0);
  });

  test('is worth 10 extra for Reds, -10 for Grays and no change for Bridge', () => {
    const cards = [EO, DARROW, UNCLE_NAROL, HOLIDAY, BRIDGE];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, EO);
    expect(vp).toBe(10);
  });
});
