import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { DARROW, SEVRO, THE_HOWLERS } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Sevro', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [SEVRO];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(15);
  });

  test('is worth nothing extra if not with Victra, The Howlers, or a Red', () => {
    const cards = [SEVRO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, SEVRO);
    expect(vp).toBe(0);
  });

  test('is worth 20 VP if with The Howlers', () => {
    const cards = [SEVRO, THE_HOWLERS];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, SEVRO);
    expect(vp).toBe(20);
  });

  test('is worth 20 VP if with a Red', () => {
    const cards = [SEVRO, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, SEVRO);
    expect(vp).toBe(20);
  });
});
