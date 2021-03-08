import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { THE_PAX, DARROW, NERO } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('The Pax', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [THE_PAX];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(20);
  });

  test('is worth 15 extra if with Darrow, Sevro, Orion, Virga or Pelus', () => {
    const cards = [THE_PAX, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, THE_PAX);
    expect(vp).toBe(15);
  });

  test('is not worth anything extra if without all of Darrow, Sevro, Orion, Virga or Pelus', () => {
    const cards = [THE_PAX, NERO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, THE_PAX);
    expect(vp).toBe(0);
  });
});
