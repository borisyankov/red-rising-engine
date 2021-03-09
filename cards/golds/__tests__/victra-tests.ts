import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { VICTRA, THE_HOWLERS, FITCHNER, SEVRO, DARROW } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Victra', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [VICTRA];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(20);
  });

  test('is worth 10 VP if with The Howlers', () => {
    const cards = [VICTRA, THE_HOWLERS];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, VICTRA);
    expect(vp).toBe(10);
  });

  test('is worth 10 VP if with Sevro or Darrow', () => {
    const cards = [VICTRA, SEVRO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, VICTRA);
    expect(vp).toBe(10);
  });

  test('is worth 10 + 10 VP if with The Howlers and Sevro or Darrow', () => {
    const cards = [VICTRA, THE_HOWLERS, SEVRO, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, VICTRA);
    expect(vp).toBe(20);
  });

  test('is not worth anything extra  if with other cards', () => {
    const cards = [VICTRA, FITCHNER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, VICTRA);
    expect(vp).toBe(0);
  });
});
