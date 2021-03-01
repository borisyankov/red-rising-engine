import { Board, Card, PlayerState } from "../../types";
import { countOf, getCards } from "../score";
import * as cards from "../../cards";

const NULL_CARDS: Card[] = [];

const NULL_PLAYER_STATE: PlayerState = {
  cards: [],
  fleetTrackPosition: 0,
  helium: 0,
  sovereignty: false,
  influence: 0,
};

const NULL_BOARD: Board = {
  jupiter: [],
  mars: [],
  luna: [],
  theInstitute: [],
};

describe("getCards", () => {
  test("if array (of cards) return self", () => {
    const result = getCards(NULL_CARDS);
    expect(result).toBe(NULL_CARDS);
  });

  test("if array (of cards) return self", () => {
    const result = getCards(NULL_PLAYER_STATE);
    expect(result).toBe(NULL_PLAYER_STATE.cards);
  });

  test("if array (of cards) return self", () => {
    const result = getCards(NULL_BOARD);
    expect(result).toHaveLength(0);
  });
});

describe("countOf", () => {
  test("if no cards, count of 'red' is 0", () => {
    const result = countOf(NULL_PLAYER_STATE, "red");
    expect(result).toBe(0);
  });

  test("if one red card is in player's hand the countOf is 1", () => {
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards: [cards.darrow],
    };
    const result = countOf(playerState, "red");
    expect(result).toBe(1);
  });

  test("only red cards are counted", () => {
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards: [cards.darrow, cards.eo, cards.nero, cards.roque, cards.octavia],
    };
    const result = countOf(playerState, "red");
    expect(result).toBe(2);
  });
});
