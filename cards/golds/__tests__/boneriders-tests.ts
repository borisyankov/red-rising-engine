import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { BONERIDERS, BRIDGE, THE_JACKAL } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Boneriders', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [BONERIDERS];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(15);
  });

  test('is worth 15 VP extra if with The Jackal', () => {
    const cards = [BONERIDERS, THE_JACKAL];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, BONERIDERS);
    expect(vp).toBe(15);
  });

  test('is worth 15 VP extra if with a Gray', () => {
    const cards = [BONERIDERS, BRIDGE];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, BONERIDERS);
    expect(vp).toBe(15);
  });
});
