import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { MORNING_STAR, ORION } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Morning Star', () => {
  test("is worth 35 VP on it's own", () => {
    const cards = [MORNING_STAR];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(35);
  });

  test('is worth nothing extra if with Orion, Virga or Pelus', () => {
    const cards = [MORNING_STAR, ORION];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, MORNING_STAR);
    expect(vp).toBe(0);
  });

  test('is worth -15 VP unless with Orion, Virga, or Pelus', () => {
    const cards = [MORNING_STAR];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, MORNING_STAR);
    expect(vp).toBe(-15);
  });
});
