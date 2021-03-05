import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { DARROW, DEANNA, DEVELOPER, GARDENER } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Deanna', () => {
  test("is worth 9 VP on it's own", () => {
    const cards = [DEANNA];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(9);
  });

  test('is not worth anything extra if alone', () => {
    const cards = [DEANNA];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, DEANNA);
    expect(vp).toBe(0);
  });

  test('is not worth anything extra if with no Reds', () => {
    const cards = [DEANNA, GARDENER, DEVELOPER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, DEANNA);
    expect(vp).toBe(0);
  });

  test('is not worth 26 VP extra if with nReds', () => {
    const cards = [DEANNA, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, DEANNA);
    expect(vp).toBe(26);
  });
});
