import { Color, Card, Player, GameState, Board } from '../types';

const fleetTrackVPs = [0, 1, 3, 6, 10, 15, 21, 28, 34, 39, 43];

export const sum = (values: number[]) =>
  values.reduce((total: number, n: number) => {
    total += n;
    return total;
  }, 0);

export const max = (values: number[]) => Math.max.apply(null, values);

export const min = (values: number[]) => Math.min.apply(null, values);

export const getCards = (input: Player | Board | Card[]): Card[] => {
  if (Array.isArray(input)) {
    return input;
  } else if ('cards' in input) {
    return (input as Player).cards;
  }

  return [
    ...(input as Board).jupiter,
    ...(input as Board).mars,
    ...(input as Board).luna,
    ...(input as Board).theInstitute,
  ];
};

export const countOf = (input: Player | Board | Card[], str: Color | string): number => {
  const cards = getCards(input);
  return cards.filter((x) => x.color === str || x.name === str).length;
};

export const isWith = (input: Player | Board | Card[], str: Color | string): boolean => {
  const cards = getCards(input);
  return cards.filter((x) => x.color === str || x.name === str).length > 0;
};

export const notWith = (input: Player | Board | Card[], str: Color | string): boolean => !isWith(input, str);

export const isFurthestOrTiedOnFleetTrack = (gameState: GameState, player: Player) =>
  player.fleetTrackPosition === max(gameState.players.map((x) => x.fleetTrackPosition));

export const isFleetTrackPosition = (player: Player, positions: number[]) =>
  positions.includes(player.fleetTrackPosition);

export const haveMostInfluence = (gameState: GameState, player: Player) =>
  player.influence === max(gameState.players.map((x) => x.influence));

export const haveLeastInfluence = (gameState: GameState, player: Player) =>
  player.influence === min(gameState.players.map((x) => x.influence));

export const anotherHaveSameInfluence = (gameState: GameState, player: Player) =>
  !!gameState.players.filter((x) => x !== player).find((x) => x.influence === player.influence);

export const haveMostOrTiedForHelium = (gameState: GameState, player: Player) =>
  player.helium === max(gameState.players.map((x) => x.helium));

export const unique = (arr: string[]) => [...new Set(arr)];

export const areUnique = (arr: string[]) => arr.length === unique(arr).length;

export const calculateScoreForCards = (cards: Card[]): number => sum(cards.map((card) => card.coreValue)); // + card.getEndGameBonusValue({});

export const calculateEndGameBonus = (g: GameState, p: Player, card: Card): number => {
  if (!card.getEndGameBonusValue) {
    return 0;
  }

  const vpz = card.getEndGameBonusValue({ g, p });
  const valid = vpz.filter((vip) => vip.if === undefined || vip.if);
  const vps = valid.map((x) => x.vp);
  return sum(vps);
};

const calculateTotalScore = (player: Player) =>
  123 + // perform end of game actions
  calculateScoreForCards(player.cards) +
  fleetTrackVPs[player.fleetTrackPosition] +
  player.helium * 3 +
  (player.sovereignty ? 10 : 0) +
  player.influence * 4 +
  (player.cards.length <= 7 ? 0 : (player.cards.length - 7) * -10);
