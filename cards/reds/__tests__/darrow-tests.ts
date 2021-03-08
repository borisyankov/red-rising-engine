import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { DANCER, DARROW, EO, HARMONY, MUSTANG, ROQUE, UNCLE_NAROL, CASSIUS } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Darrow', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [DARROW];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  test('is not worth anything extra if not 7 or more cards', () => {
    const cards = [DARROW, EO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, DARROW);
    expect(vp).toBe(0);
  });

  test('is not worth 30 VP extra if with 7 or more cards', () => {
    const cards = [DARROW, CASSIUS, ROQUE, MUSTANG, DANCER, HARMONY, UNCLE_NAROL];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, DARROW);
    expect(vp).toBe(30);
  });
});
