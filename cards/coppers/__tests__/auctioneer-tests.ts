import { calculateScoreForCardsCore } from '../../../scoring/score';
import { AUCTIONEER } from '../..';

describe('Auctioneer', () => {
  test("is worth 12 VP on it's own", () => {
    const cards = [AUCTIONEER];
    const vp = calculateScoreForCardsCore(cards);
    expect(vp).toBe(12);
  });
});
