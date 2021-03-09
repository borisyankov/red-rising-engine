import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { LYSANDER, OCTAVIA } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Lysander', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [LYSANDER];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  test('is worth nothing extra if with none of the needed cards and no sovereignty', () => {
    const cards = [LYSANDER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, LYSANDER);
    expect(vp).toBe(0);
  });

  test('is worth 20 VP if owning the Sovereign token', () => {
    const cards = [LYSANDER];
    const player = {
      ...NULL_PLAYER,
      sovereignty: true,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, LYSANDER);
    expect(vp).toBe(20);
  });

  test('is worth 20 VP if with Octavia or Cassius', () => {
    const cards = [LYSANDER, OCTAVIA];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, LYSANDER);
    expect(vp).toBe(20);
  });
});
