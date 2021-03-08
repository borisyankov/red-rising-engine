import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { NANNY, BANKER, SEER, LAWYER } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Nanny', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [NANNY];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  test('is worth 5 VP extra for each Silver, White and Copper', () => {
    const cards = [NANNY, BANKER, SEER, LAWYER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, NANNY);
    expect(vp).toBe(15);
  });
});
