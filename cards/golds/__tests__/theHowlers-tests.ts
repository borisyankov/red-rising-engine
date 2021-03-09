import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { THE_HOWLERS, SEVRO, VICTRA } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('The Howlers', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [THE_HOWLERS];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(20);
  });

  test('is worth 15 VP extra if with Sevro', () => {
    const cards = [THE_HOWLERS, SEVRO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, THE_HOWLERS);
    expect(vp).toBe(15);
  });

  test('is not worth anything extra if without  Sevro', () => {
    const cards = [THE_HOWLERS, VICTRA];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, THE_HOWLERS);
    expect(vp).toBe(0);
  });
});
