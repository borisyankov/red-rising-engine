import { Player } from '../../../types';
import { calculateEndGameBonus, calculateScoreForCardsCore } from '../../../scoring/score';
import { ADMINISTRATOR } from '../..';
import { NULL_GAME_STATE, NULL_PLAYER } from '../../../null';

describe('Administrator', () => {
  test("is worth 15 VP on it's own", () => {
    const cards = [ADMINISTRATOR];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(15);
  });

  const player1: Player = {
    ...NULL_PLAYER,
    influence: 4,
  };
  const player2: Player = {
    ...NULL_PLAYER,
    influence: 4,
  };
  const player3: Player = {
    ...NULL_PLAYER,
    influence: 8,
  };
  const game = {
    ...NULL_GAME_STATE,
    players: [player1, player2, player3],
  };

  test('is worth 15 VP if the least Influence on the Institute (or tied)', () => {
    const vp = calculateEndGameBonus(game, player1, ADMINISTRATOR);
    expect(vp).toBe(15);
  });

  test('is not worthy anything extra 0 VP if someone else has less Influence', () => {
    const vp = calculateEndGameBonus(game, player3, ADMINISTRATOR);
    expect(vp).toBe(0);
  });
});
