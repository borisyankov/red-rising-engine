import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { ASH_LORD, DARROW, EO, PELUS, THE_PAX, VIRGA } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Ash Lord', () => {
  test("is worth 25 VP on it's own", () => {
    const cards = [ASH_LORD];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(25);
  });

  test('is not worth anything extra if no Blue in hand and no banished Blues', () => {
    const cards = [ASH_LORD, DARROW, EO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ASH_LORD);
    expect(vp).toBe(0);
  });

  test('worth 5 VP for each Blue card', () => {
    const cards = [ASH_LORD, VIRGA, PELUS];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ASH_LORD);
    expect(vp).toBe(10);
  });

  test('is worth 5 VP for each banished Blue card', () => {
    const cards = [ASH_LORD];
    const game = {
      ...NULL_GAME_STATE,
      banished: [THE_PAX, VIRGA, PELUS],
    };
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(game, player, ASH_LORD);
    expect(vp).toBe(15);
  });
});
