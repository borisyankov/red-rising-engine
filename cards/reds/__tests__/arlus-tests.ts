import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { ARLUS, DANCER, DARROW, NERO } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Arlus', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [ARLUS];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test('is worth 25 VP extra if with no Golds', () => {
    const cards = [ARLUS, DARROW, DANCER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ARLUS);
    expect(vp).toBe(25);
  });

  test('is not worth anything extra if one or more Golds', () => {
    const cards = [ARLUS, DARROW, NERO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ARLUS);
    expect(vp).toBe(0);
  });
});
