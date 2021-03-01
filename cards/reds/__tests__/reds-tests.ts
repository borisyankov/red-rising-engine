import { calculateScoreForCards } from "../../../scoring/score";
import { arlus, dancer, darrow, deanna, eo, harmony, uncleNarol } from "../..";

describe("Arlus", () => {
  test("is worth 10 points on it's own", () => {
    const cards = [arlus];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });
});

describe("Dancer", () => {
  test("is worth 8 points on it's own", () => {
    const cards = [dancer];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(8);
  });
});

describe("Darrow", () => {
  test("is worth q0 points on it's own", () => {
    const cards = [darrow];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });
});

describe("Deanna", () => {
  test("is worth 9 points on it's own", () => {
    const cards = [deanna];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(9);
  });
});

describe("Eo", () => {
  test("is worth 7 points on it's own", () => {
    const cards = [eo];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(7);
  });
});

describe("Harmony", () => {
  test("is worth 8 points on it's own", () => {
    const cards = [harmony];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(7);
  });
});

describe("Uncle Narol", () => {
  test("is worth 8 points on it's own", () => {
    const cards = [uncleNarol];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });
});
