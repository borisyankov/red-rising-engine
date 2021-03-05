import {
  countOf,
  getCards,
  isWith,
  isFurthestOrTiedOnFleetTrack,
  haveMostInfluence,
  haveMostOrTiedForHelium,
} from '../score';
import * as CARDS from '../../cards';
import { NULL_CARDS, NULL_GAME_STATE, NULL_PLAYER } from '../../null';
import { Player } from '../../types';

describe('getCards', () => {
  test('if array (of cards) return self', () => {
    const result = getCards(NULL_CARDS);
    expect(result).toBe(NULL_CARDS);
  });

  test('if array (of cards) return self', () => {
    const result = getCards(NULL_PLAYER);
    expect(result).toBe(NULL_PLAYER.cards);
  });

  test('if array (of cards) return self', () => {
    const result = getCards(NULL_CARDS);
    expect(result).toHaveLength(0);
  });
});

describe('countOf', () => {
  test("if no cards, count of 'red' is 0", () => {
    const result = countOf(NULL_PLAYER, 'red');
    expect(result).toBe(0);
  });

  test("if one red card is in player's hand the countOf is 1", () => {
    const player = {
      ...NULL_PLAYER,
      cards: [CARDS.DARROW],
    };
    const result = countOf(player, 'red');
    expect(result).toBe(1);
  });

  test('only red cards are counted', () => {
    const player = {
      ...NULL_PLAYER,
      cards: [CARDS.DARROW, CARDS.EO, CARDS.NERO, CARDS.ROQUE, CARDS.OCTAVIA],
    };
    const result = countOf(player, 'red');
    expect(result).toBe(2);
  });
});

describe('isWith', () => {
  test('if no cards, the not with', () => {
    const result = isWith(NULL_PLAYER, 'red');
    expect(result).toBe(false);
  });

  test("if one red card is in player's hand then it is *with* red", () => {
    const player = {
      ...NULL_PLAYER,
      cards: [CARDS.DARROW],
    };
    const result = isWith(player, 'red');
    expect(result).toBe(true);
  });

  test("if some cards but no red then 'false'", () => {
    const player = {
      ...NULL_PLAYER,
      cards: [CARDS.NERO, CARDS.ROQUE, CARDS.OCTAVIA],
    };
    const result = isWith(player, 'red');
    expect(result).toBe(false);
  });
});

describe('isFurthestOrTiedOnFleetTrack', () => {
  const player1: Player = {
    ...NULL_PLAYER,
    fleetTrackPosition: 7,
  };
  const player2: Player = {
    ...NULL_PLAYER,
    fleetTrackPosition: 7,
  };
  const player3: Player = {
    ...NULL_PLAYER,
    fleetTrackPosition: 5,
  };
  const game = {
    ...NULL_GAME_STATE,
    players: [player1, player2, player3],
  };

  test('Player1 is tied with Player2 so he is furthest on the Fleet Track (or tied)', () => {
    const result = isFurthestOrTiedOnFleetTrack(game, player1);
    expect(result).toBe(true);
  });

  test('Player2 is tied with Player1 so he is also "furthest"', () => {
    const result = isFurthestOrTiedOnFleetTrack(game, player2);
    expect(result).toBe(true);
  });

  test('Player3 is less advanced on the Fleet Track so not "furthest"', () => {
    const result = isFurthestOrTiedOnFleetTrack(game, player3);
    expect(result).toBe(false);
  });
});

describe('haveMostInfluence', () => {
  const player1: Player = {
    ...NULL_PLAYER,
    influence: 7,
  };
  const player2: Player = {
    ...NULL_PLAYER,
    influence: 7,
  };
  const player3: Player = {
    ...NULL_PLAYER,
    influence: 5,
  };
  const game = {
    ...NULL_GAME_STATE,
    players: [player1, player2, player3],
  };

  test('Player1 is tied with Player2 so he still has most influence (or tied)', () => {
    const result = haveMostInfluence(game, player1);
    expect(result).toBe(true);
  });

  test('Player3 has less influence than at least one other player, hence not "most"', () => {
    const result = haveMostInfluence(game, player3);
    expect(result).toBe(false);
  });
});

describe('haveMostOrTiedForHelium', () => {
  const player1: Player = {
    ...NULL_PLAYER,
    helium: 7,
  };
  const player2: Player = {
    ...NULL_PLAYER,
    helium: 7,
  };
  const player3: Player = {
    ...NULL_PLAYER,
    helium: 5,
  };
  const game = {
    ...NULL_GAME_STATE,
    players: [player1, player2, player3],
  };

  test('Player1 is tied with Player2 so he still has most helium (or tied)', () => {
    const result = haveMostOrTiedForHelium(game, player1);
    expect(result).toBe(true);
  });

  test('Player3 has less helium than at least one other player, hence not "most"', () => {
    const result = haveMostOrTiedForHelium(game, player3);
    expect(result).toBe(false);
  });
});
