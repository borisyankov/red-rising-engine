import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { CASSIUS, DARROW, MUSTANG } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Cassius', () => {
  test("is worth 25 VP on it's own", () => {
    const cards = [CASSIUS];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(25);
  });

  test('is worth 40 VP if with both Mustang & Darrow', () => {
    const cards = [CASSIUS, MUSTANG, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, CASSIUS);
    expect(vp).toBe(40);
  });

  test('is worth -20 VP if with Darrow but not Mustang', () => {
    const cards = [CASSIUS, DARROW];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, CASSIUS);
    expect(vp).toBe(-20);
  });

  test('is not worth anything extra (positive or negative) if not with Darrow', () => {
    const cards = [CASSIUS, MUSTANG];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, CASSIUS);
    expect(vp).toBe(0);
  });
});
