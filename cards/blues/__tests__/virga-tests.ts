import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { VIRGA } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Virga', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [VIRGA];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  test('is not worth anything extra if not advanced on the Fleet Track', () => {
    const vp = calculateEndGameBonus(NULL_GAME_STATE, NULL_PLAYER, VIRGA);
    expect(vp).toBe(0);
  });

  test('is worth extra 15 VP if Fleet Track position is 6-8', () => {
    const player = {
      ...NULL_PLAYER,
      fleetTrackPosition: 6,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, VIRGA);
    expect(vp).toBe(15);
  });

  test('is worth extra 30 VP if Fleet Track position is 9 or 10', () => {
    const player = {
      ...NULL_PLAYER,
      fleetTrackPosition: 9,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, VIRGA);
    expect(vp).toBe(30);
  });
});
