import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { MESS_HALL_COOK, BRIDGE, CYTHER, DANCER } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Mess Hall Cook', () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [MESS_HALL_COOK];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(10);
  });

  test('is worth 5 VP extra for each Gray and Orange card', () => {
    const cards = [MESS_HALL_COOK, BRIDGE, CYTHER, DANCER];
    const player = {
      ...NULL_PLAYER,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, player, MESS_HALL_COOK);
    expect(vp).toBe(10);
  });
});
