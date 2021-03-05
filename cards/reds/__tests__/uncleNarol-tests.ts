import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { DARROW, DEVELOPER, JOPHO, MODJOB, NERO, UNCLE_NAROL } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Uncle Narol', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [UNCLE_NAROL];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test('is worth 40 VP extra if with only cards of 10 or less core value', () => {
    const cards = [UNCLE_NAROL, DARROW, MODJOB, DEVELOPER, JOPHO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, UNCLE_NAROL);
    expect(vp).toBe(40);
  });

  test('is not worth anything extra if one or more cards of more than 10 core value', () => {
    const cards = [UNCLE_NAROL, DARROW, NERO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, UNCLE_NAROL);
    expect(vp).toBe(0);
  });
});
