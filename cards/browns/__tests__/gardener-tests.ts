import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { DARROW, EVEY, GARDENER, MATTEO, MUSICIAN, VLOGGER, ZANZIBAR } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Gardener', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [GARDENER];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test('is worth 5 VP extra for each Violet & Pink card', () => {
    const cards = [GARDENER, ZANZIBAR, VLOGGER, MUSICIAN, EVEY, MATTEO, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, GARDENER);
    expect(vp).toBe(25);
  });
});
