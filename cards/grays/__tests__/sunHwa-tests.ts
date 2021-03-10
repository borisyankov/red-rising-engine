import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { SUN_HWA, HELGA, JOPHO, HACKER, DEVELOPER } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Sun Hwa', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [SUN_HWA];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(15);
  });

  const game = {
    ...NULL_GAME_STATE,
    board: {
      jupiter: [HELGA],
      mars: [JOPHO],
      luna: [],
      theInstitute: [HACKER, DEVELOPER],
    },
  };

  test('is worth no extra VP if no card on the board', () => {
    const vp = calculateEndGameBonus(NULL_GAME_STATE, NULL_PLAYER, SUN_HWA);
    expect(vp).toBe(0);
  });

  test('is worth 5 VP for each Obsidian and Green on all locations (on the board)', () => {
    const vp = calculateEndGameBonus(game, NULL_PLAYER, SUN_HWA);
    expect(vp).toBe(20);
  });
});
