import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { DARROW, EVEY, GARDENER, HARMONY, NERO, SEFI } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Harmony', () => {
  test("is worth 7 VP on it's own", () => {
    const cards = [HARMONY];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(7);
  });

  test('is worth 33 extra if alone', () => {
    const cards = [HARMONY];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, HARMONY);
    expect(vp).toBe(33);
  });

  test('is worth 33 extra if only with Reds, Pinks, Browns and/or Obsidians', () => {
    const cards = [HARMONY, DARROW, EVEY, GARDENER, SEFI];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, HARMONY);
    expect(vp).toBe(33);
  });

  test('is not worth anything extra if anything but Reds, Pinks, Browns and/or Obsidians', () => {
    const cards = [HARMONY, NERO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, HARMONY);
    expect(vp).toBe(0);
  });
});
