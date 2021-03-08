import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { PELUS } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Pelus', () => {
  test("is worth 5 VP on it's own", () => {
    const cards = [PELUS];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(5);
  });

  test('is not worth anything extra if not advanced on the Fleet Track', () => {
    const vp = calculateEndGameBonus(NULL_GAME_STATE, NULL_PLAYER, PELUS);
    expect(vp).toBe(0);
  });

  test('is worth extra 20 VP if Fleet Track position is 5-7', () => {
    const player = {
      ...NULL_PLAYER,
      fleetTrackPosition: 5,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, PELUS);
    expect(vp).toBe(20);
  });

  test('is worth extra 35 VP if Fleet Track position is 5-7', () => {
    const player = {
      ...NULL_PLAYER,
      fleetTrackPosition: 10,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, PELUS);
    expect(vp).toBe(35);
  });
});
