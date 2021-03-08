import { calculateEndGameBonus, calculateScoreForCards } from '../../../scoring/score';
import { ANTONIA, BONERIDERS, FITCHNER, MUSTANG, ORION, ROQUE, SEVRO, VICTRA } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';
import { THE_JACKAL } from '../theJackal';

describe('Antonia', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [ANTONIA];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(15);
  });

  test('is worth nothing extra if with none of the several specific cards', () => {
    const cards = [ANTONIA];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ANTONIA);
    expect(vp).toBe(0);
  });

  test('is worth 15 VP if with The Jackal', () => {
    const cards = [ANTONIA, THE_JACKAL];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ANTONIA);
    expect(vp).toBe(15);
  });

  test('is worth 15 VP if two other Gold cards', () => {
    const cards = [ANTONIA, ROQUE, MUSTANG];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ANTONIA);
    expect(vp).toBe(15);
  });

  test('is worth 15 VP if lots of other Gold cards', () => {
    const cards = [ANTONIA, ROQUE, MUSTANG, BONERIDERS, FITCHNER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ANTONIA);
    expect(vp).toBe(15);
  });

  test('is worth -10 VP if with Victra or Sevro', () => {
    const cards = [ANTONIA, SEVRO];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ANTONIA);
    expect(vp).toBe(-10);
  });

  test('is worth 15-10 VP if with several Golds but one of them is Victra or Sevro', () => {
    const cards = [ANTONIA, ROQUE, MUSTANG, BONERIDERS, VICTRA];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ANTONIA);
    expect(vp).toBe(5);
  });
});
