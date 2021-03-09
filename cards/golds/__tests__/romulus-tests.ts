import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { ROMULUS, THE_PAX, ROQUE } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Romulus', () => {
  test("is worth 25 VP on it's own", () => {
    const cards = [ROMULUS];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(25);
  });

  test('is worth 15 VP if owning the Sovereign token', () => {
    const cards = [ROMULUS, THE_PAX];
    const player = {
      ...NULL_PLAYER,
      cards,
      sovereignty: true,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ROMULUS);
    expect(vp).toBe(15);
  });

  test('is worth -25 VP if with Roque or Octavia or without a Blue', () => {
    const cards = [ROMULUS, ROQUE];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ROMULUS);
    expect(vp).toBe(-25);
  });

  test('is not worth anything extra (positive or negative) if with Blue but no Sovereign token', () => {
    const cards = [ROMULUS, THE_PAX];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ROMULUS);
    expect(vp).toBe(0);
  });
});
