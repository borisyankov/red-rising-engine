import { calculateScoreForCards } from "../../../scoring/score";
import { ARLUS, DANCER, DARROW, DEANNA, EO, HARMONY, UNCLE_NAROL } from "../..";

describe("Arlus", () => {
  test("is worth 10 points on it's own", () => {
    const cards = [ARLUS];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });
});

describe("Dancer", () => {
  test("is worth 8 points on it's own", () => {
    const cards = [DANCER];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(8);
  });
});

describe("Darrow", () => {
  test("is worth q0 points on it's own", () => {
    const cards = [DARROW];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });
});

describe("Deanna", () => {
  test("is worth 9 points on it's own", () => {
    const cards = [DEANNA];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(9);
  });
});

describe("Eo", () => {
  test("is worth 7 points on it's own", () => {
    const cards = [EO];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(7);
  });
});

describe("Harmony", () => {
  test("is worth 8 points on it's own", () => {
    const cards = [HARMONY];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(7);
  });
});

describe("Uncle Narol", () => {
  test("is worth 8 points on it's own", () => {
    const cards = [UNCLE_NAROL];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });
});
