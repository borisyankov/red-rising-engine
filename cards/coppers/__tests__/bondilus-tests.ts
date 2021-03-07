import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { BONDILUS, ROQUE } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Bondilus', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [BONDILUS];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(20);
  });

  test('is worth 5 VP extra if owning the Sovereign token', () => {
    const player = {
      ...NULL_PLAYER,
      sovereignty: true,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, BONDILUS);
    expect(vp).toBe(5);
  });

  test('is worth 5 VP extra if with a Gold card', () => {
    const cards = [BONDILUS, ROQUE];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, BONDILUS);
    expect(vp).toBe(5);
  });

  test('is worth 10 VP extra if both owning the Sovereign token and with a Gold card', () => {
    const cards = [BONDILUS, ROQUE];
    const player = {
      ...NULL_PLAYER,
      cards,
      sovereignty: true,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, BONDILUS);
    expect(vp).toBe(10);
  });
});
