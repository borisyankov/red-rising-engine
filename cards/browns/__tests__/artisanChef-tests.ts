import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { ARTISAN_CHEF, CASSIUS, DANCER, DARROW, MUSTANG, NERO } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Artisan Chef', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [ARTISAN_CHEF];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  test('is worth 5 VP extra for each Gold card', () => {
    const cards = [ARTISAN_CHEF, DANCER, DARROW, NERO, MUSTANG, CASSIUS];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ARTISAN_CHEF);
    expect(vp).toBe(15);
  });
});
