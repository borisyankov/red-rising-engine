import { countOf, getCards, isWith } from "../score";
import * as CARDS from "../../cards";
import { NULL_CARDS, NULL_PLAYER } from "../../null";

describe("getCards", () => {
  test("if array (of cards) return self", () => {
    const result = getCards(NULL_CARDS);
    expect(result).toBe(NULL_CARDS);
  });

  test("if array (of cards) return self", () => {
    const result = getCards(NULL_PLAYER);
    expect(result).toBe(NULL_PLAYER.cards);
  });

  test("if array (of cards) return self", () => {
    const result = getCards(NULL_CARDS);
    expect(result).toHaveLength(0);
  });
});

describe("countOf", () => {
  test("if no cards, count of 'red' is 0", () => {
    const result = countOf(NULL_PLAYER, "red");
    expect(result).toBe(0);
  });

  test("if one red card is in player's hand the countOf is 1", () => {
    const player = {
      ...NULL_PLAYER,
      cards: [CARDS.DARROW],
    };
    const result = countOf(player, "red");
    expect(result).toBe(1);
  });

  test("only red cards are counted", () => {
    const player = {
      ...NULL_PLAYER,
      cards: [CARDS.DARROW, CARDS.EO, CARDS.NERO, CARDS.ROQUE, CARDS.OCTAVIA],
    };
    const result = countOf(player, "red");
    expect(result).toBe(2);
  });
});

describe("isWith", () => {
  test("if no cards, the not with", () => {
    const result = isWith(NULL_PLAYER, "red");
    expect(result).toBe(false);
  });

  test("if one red card is in player's hand then it is *with* red", () => {
    const player = {
      ...NULL_PLAYER,
      cards: [CARDS.DARROW],
    };
    const result = isWith(player, "red");
    expect(result).toBe(true);
  });

  test("if some cards but no red then 'false'", () => {
    const player = {
      ...NULL_PLAYER,
      cards: [CARDS.NERO, CARDS.ROQUE, CARDS.OCTAVIA],
    };
    const result = isWith(player, "red");
    expect(result).toBe(false);
  });
});
