import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { TACTUS, DARROW, THE_JACKAL, EVEY } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Tactus', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [TACTUS];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(20);
  });

  test('is worth 20 VP extra if with Darrow (or Octavia, or a Pink)', () => {
    const cards = [TACTUS, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, TACTUS);
    expect(vp).toBe(20);
  });

  test('is worth 20 VP extra if with a Pink (or Octavia, or Darrow)', () => {
    const cards = [TACTUS, EVEY];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, TACTUS);
    expect(vp).toBe(20);
  });

  test('is not worth anything extra if without Octavia, Darrow and Pinks', () => {
    const cards = [TACTUS, THE_JACKAL];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, TACTUS);
    expect(vp).toBe(0);
  });
});
