import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { FITCHNER, DARROW, CASSIUS, SEVRO, HARMONY } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Fitchner', () => {
  test("is worth 25 VP on it's own", () => {
    const cards = [FITCHNER];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(25);
  });

  test('is worth 10 VP extra if with a Red', () => {
    const cards = [FITCHNER, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, FITCHNER);
    expect(vp).toBe(10);
  });

  test('is worth 10 VP extra if with a Red', () => {
    const cards = [FITCHNER, SEVRO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, FITCHNER);
    expect(vp).toBe(10);
  });

  test('is worth 10 + 10 VP extra if with a Red and Sevro', () => {
    const cards = [FITCHNER, DARROW, HARMONY, SEVRO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, FITCHNER);
    expect(vp).toBe(20);
  });

  test('is not worth anything extra if without a Red or Sevro', () => {
    const cards = [FITCHNER, CASSIUS];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, FITCHNER);
    expect(vp).toBe(0);
  });
});
