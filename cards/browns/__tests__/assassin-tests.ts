import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { ASSASSIN, DARROW, HELGA, NANNY, SEFI } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Assassin', () => {
  test("is worth 5 VP on it's own", () => {
    const cards = [ASSASSIN];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(5);
  });

  test('is worth 10 VP extra for each Obsidian card', () => {
    const cards = [ASSASSIN, HELGA, NANNY, SEFI, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ASSASSIN);
    expect(vp).toBe(20);
  });
});
