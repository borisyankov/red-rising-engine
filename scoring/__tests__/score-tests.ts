import { Board, Card, PlayerState } from "../../types";
import { getCards } from "../score";

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
