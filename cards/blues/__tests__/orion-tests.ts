import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { ORION, THE_PAX } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Orion', () => {
  test("is worth 18 VP on it's own", () => {
    const cards = [ORION];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(18);
  });

  test('is not worth anything extra if not advanced on the Fleet Tack and not with "Pax Au Telemanus" or "The Pax"', () => {
    const cards = [ORION];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ORION);
    expect(vp).toBe(0);
  });

  test('with no extra cards, it is worth extra VP equal to the position on the Fleet Track', () => {
    const cards = [ORION];
    const player = {
      ...NULL_PLAYER,
      fleetTrackPosition: 7,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ORION);
    expect(vp).toBe(7);
  });

  test('the most extra VP worth is with "Pax Au Telemanus" or "The Pax" and max position on Fleet Track', () => {
    const cards = [ORION, THE_PAX];
    const player = {
      ...NULL_PLAYER,
      fleetTrackPosition: 10,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, ORION);
    expect(vp).toBe(20);
  });
});
