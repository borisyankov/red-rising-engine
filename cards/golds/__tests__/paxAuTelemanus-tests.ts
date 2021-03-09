import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { PAX_AU_TELEMANUS, BRIDGE, STAINED, MUSTANG } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Pax Au Telemanus', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [PAX_AU_TELEMANUS];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(15);
  });

  test('is worth 20 VP extra if with an Obsidian (or Mustang)', () => {
    const cards = [PAX_AU_TELEMANUS, STAINED];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, PAX_AU_TELEMANUS);
    expect(vp).toBe(20);
  });

  test('is worth 20 VP extra if with Mustang (or an Obsidian)', () => {
    const cards = [PAX_AU_TELEMANUS, MUSTANG];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, PAX_AU_TELEMANUS);
    expect(vp).toBe(20);
  });

  test('is not worth any VP extra if not with an Obsidian or Mustang', () => {
    const cards = [PAX_AU_TELEMANUS, BRIDGE];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, PAX_AU_TELEMANUS);
    expect(vp).toBe(0);
  });
});
