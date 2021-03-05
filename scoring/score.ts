import { Color, Card, PlayerState, GameState, Board } from "../types";

const fleetTrackVPs = [0, 1, 3, 6, 10, 15, 21, 28, 34, 39, 43];

export const sum = (values: number[]) =>
  values.reduce((total: number, n: number) => {
    total += n;
    return total;
  }, 0);

export const getCards = (input: PlayerState | Board | Card[]): Card[] => {
  if (Array.isArray(input)) {
    return input;
  } else if ("cards" in input) {
    return (input as PlayerState).cards;
  }

  return [
    ...(input as Board).jupiter,
    ...(input as Board).mars,
    ...(input as Board).luna,
    ...(input as Board).theInstitute,
  ];
};

export const countOf = (
  input: PlayerState | Board | Card[],
  str: Color | string
): number => {
  const cards = getCards(input);
  return cards.filter((x) => x.color === str || x.name === str).length;
};

export const isWith = (
  input: PlayerState | Board | Card[],
  str: Color | string
): boolean => {
  const cards = getCards(input);
  return cards.filter((x) => x.color === str || x.name === str).length > 0;
};

export const notWith = (
  input: PlayerState | Board | Card[],
  str: Color | string
): boolean => !isWith(input, str);

export const isFurthestOrTiedOnFleetTrack = (
  gameState: GameState,
  playerState: PlayerState
) => false;

export const isFleetTrackPosition = (
  playerState: PlayerState,
  positions: number[]
) => positions.includes(playerState.fleetTrackPosition);

export const haveMostInfluence = (
  gameState: GameState,
  playerState: PlayerState
) => false;

export const haveMostOrTiedForHelium = (playerState: PlayerState) => false;

export const unique = (arr: string[]) => [...new Set(arr)];

export const areUnique = (arr: string[]) => arr.length === unique(arr).length;

// export const calculateScoreForCard = (card: Card[]): number => 0;

export const calculateScoreForCards = (cards: Card[]): number =>
  sum(cards.map((card) => card.coreValue)); // + card.getEndGameBonusValue({});

export const calculateEndGameBonus = (
  g: GameState,
  p: PlayerState,
  card: Card
): number => {
  if (!card.getEndGameBonusValue) {
    return 0;
  }

  const vpz = card.getEndGameBonusValue({ g, p });
  const valid = vpz.filter((vip) => vip.if === undefined || vip.if);
  const vps = valid.map((x) => x.vp);
  return sum(vps);
};

const calculateTotalScore = (playerState: PlayerState) =>
  123 + // perform end of game actions
  calculateScoreForCards(playerState.cards) +
  fleetTrackVPs[playerState.fleetTrackPosition] +
  playerState.helium * 3 +
  (playerState.sovereignty ? 10 : 0) +
  playerState.influence * 4 +
  (playerState.cards.length <= 7 ? 0 : (playerState.cards.length - 7) * -10);
