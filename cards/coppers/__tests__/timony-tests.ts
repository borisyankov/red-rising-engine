import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { TIMONY } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Timony', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [TIMONY];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test('is worth 3 VP per Influence token', () => {
    const player = {
      ...NULL_PLAYER,
      influence: 6,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, TIMONY);
    expect(vp).toBe(18);
  });
});
