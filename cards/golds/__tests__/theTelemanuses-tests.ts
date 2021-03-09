import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { THE_TELEMANUSES, MUSTANG, THE_PAX } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('The Telemanuses', () => {
  test("is worth 20 VP on it's own", () => {
    const cards = [THE_TELEMANUSES];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(20);
  });

  test('is worth 15 VP if with Pax au Telemanus or The Pax', () => {
    const cards = [THE_TELEMANUSES, THE_PAX];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, THE_TELEMANUSES);
    expect(vp).toBe(15);
  });

  test('is not worth anything extra if not with Pax au Telemanus or The Pax', () => {
    const cards = [THE_TELEMANUSES, MUSTANG];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, THE_TELEMANUSES);
    expect(vp).toBe(0);
  });
});
