import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { NERO, CASSIUS, KARNUS, OCTAVIA } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Nero', () => {
  test("is worth 25 VP on it's own", () => {
    const cards = [NERO];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(25);
  });

  test('is worth 10 VP if owning the Sovereign token', () => {
    const cards = [NERO];
    const player = {
      ...NULL_PLAYER,
      cards,
      sovereignty: true,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, NERO);
    expect(vp).toBe(10);
  });

  test('is worth -5 VP each for Cassius, Karnus, and Octavia', () => {
    const cards = [NERO, CASSIUS, KARNUS, OCTAVIA];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, NERO);
    expect(vp).toBe(-15);
  });
});
