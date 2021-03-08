import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { AJA, DARROW, OCTAVIA } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Aja', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [AJA];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(15);
  });

  test('is worth 15 VP extra if with Octavia', () => {
    const cards = [AJA, OCTAVIA];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, AJA);
    expect(vp).toBe(15);
  });

  test('is not worth anything extra if not with Octavia', () => {
    const cards = [AJA, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, AJA);
    expect(vp).toBe(0);
  });
});
