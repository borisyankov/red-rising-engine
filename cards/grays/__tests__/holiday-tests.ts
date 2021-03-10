import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { HOLIDAY, PELUS, VIRGA, PULSE_ARMORER, AEGIS_CRAFTSMAN } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Holiday', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [HOLIDAY];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(15);
  });

  const game = {
    ...NULL_GAME_STATE,
    board: {
      jupiter: [PELUS],
      mars: [PULSE_ARMORER],
      luna: [VIRGA],
      theInstitute: [AEGIS_CRAFTSMAN],
    },
  };

  test('is worth no extra VP if no card on the board', () => {
    const vp = calculateEndGameBonus(NULL_GAME_STATE, NULL_PLAYER, HOLIDAY);
    expect(vp).toBe(0);
  });

  test('is worth 5 VP for each Orange and Blue on all locations (on the board)', () => {
    const vp = calculateEndGameBonus(game, NULL_PLAYER, HOLIDAY);
    expect(vp).toBe(20);
  });
});
