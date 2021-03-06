import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { JANITOR, DEVELOPER, SURGEON, INVICTUS, EO } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Janitor', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [JANITOR];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test('is worth 5 VP extra for each Green, Yellow, and Blue card', () => {
    const cards = [JANITOR, DEVELOPER, SURGEON, INVICTUS, EO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, JANITOR);
    expect(vp).toBe(15);
  });
});
