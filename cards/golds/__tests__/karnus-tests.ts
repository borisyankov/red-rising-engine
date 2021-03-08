import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { KARNUS, CASSIUS, NERO, DARROW, FITCHNER } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Karnus', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [KARNUS];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(15);
  });

  test('is worth 30 VP if with Cassius', () => {
    const cards = [KARNUS, CASSIUS];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, KARNUS);
    expect(vp).toBe(30);
  });

  test('is worth -15 VP if with Mustang, The Jackal, or Nero', () => {
    const cards = [KARNUS, NERO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, KARNUS);
    expect(vp).toBe(-15);
  });

  test('is not worth anything extra (positive or negative) if  with other cards', () => {
    const cards = [KARNUS, DARROW, FITCHNER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, KARNUS);
    expect(vp).toBe(0);
  });
});
