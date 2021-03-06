import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { MODJOB, DANCER, HARMONY, NANNY, ASSASSIN } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Modjob', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [MODJOB];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test('is worth 5 VP extra for each Brown and Red (including Modjob)', () => {
    const cards = [MODJOB, DANCER, HARMONY, NANNY, ASSASSIN];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, MODJOB);
    expect(vp).toBe(25);
  });
});
