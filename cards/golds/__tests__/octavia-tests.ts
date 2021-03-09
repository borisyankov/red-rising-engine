import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { OCTAVIA, LYSANDER } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Octavia', () => {
  test("is worth 30 VP on it's own", () => {
    const cards = [OCTAVIA];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(30);
  });

  test('is worth -30 VP extra if not owning the Sovereign token (or with Lysander)', () => {
    const cards = [OCTAVIA];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, OCTAVIA);
    expect(vp).toBe(-30);
  });

  test('is worth nothing extra if with Lysander', () => {
    const cards = [OCTAVIA, LYSANDER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, OCTAVIA);
    expect(vp).toBe(0);
  });

  test('is worth nothing extra if owning the Sovereign token', () => {
    const cards = [OCTAVIA];
    const player = {
      ...NULL_PLAYER,
      cards,
      sovereignty: true,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, OCTAVIA);
    expect(vp).toBe(0);
  });
});
