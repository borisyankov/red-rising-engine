import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { LAWYER, JUDGE, SEER, DIPLOMAT, POLITICIAN } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Lawyer', () => {
  test("is worth 13 VP on it's own", () => {
    const cards = [LAWYER];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(13);
  });

  test('is worth 22 VP extra if with the Judge', () => {
    const cards = [LAWYER, JUDGE];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, LAWYER);
    expect(vp).toBe(22);
  });

  test('is worth 12 VP extra if with a White that is not Judge', () => {
    const cards = [LAWYER, SEER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, LAWYER);
    expect(vp).toBe(12);
  });

  test('is worth nothing with no White', () => {
    const cards = [LAWYER, DIPLOMAT, POLITICIAN];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, LAWYER);
    expect(vp).toBe(0);
  });
});
