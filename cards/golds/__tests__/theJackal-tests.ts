import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { THE_JACKAL, DARROW, VICTRA } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('The Jackal', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [THE_JACKAL];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  test('is not worth anything extra if no Sovereign token, not with Darrow, not with Octavia', () => {
    const cards = [THE_JACKAL, VICTRA];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, THE_JACKAL);
    expect(vp).toBe(0);
  });

  test('worth 30 VP extra if owning the Sovereign token', () => {
    const cards = [THE_JACKAL];
    const player = {
      ...NULL_PLAYER,
      cards,
      sovereignty: true,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, THE_JACKAL);
    expect(vp).toBe(30);
  });

  test('is worth -30 VP if with Darrow or Octavia', () => {
    const cards = [THE_JACKAL, DARROW];
    const game = {
      ...NULL_GAME_STATE,
      cards,
    };
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(game, player, THE_JACKAL);
    expect(vp).toBe(-30);
  });
});
