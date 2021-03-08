import { Color, Card, Player, GameState, Board, PlayerScore } from '../types';

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
  return cards.filter((x) => x.color === str || x.extraColor === str || x.name === str).length;
};

export const isWith = (input: Player | Board | Card[], str: Color | string): boolean => {
  const cards = getCards(input);
  return cards.filter((x) => x.color === str || x.extraColor === str || x.name === str).length > 0;
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

export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

export const areUnique = (arr: string[]) => arr.length === unique(arr).length;

export const calculateEndGameBonus = (g: GameState, p: Player, card: Card): number => {
  if (!card.getEndGameBonusValue) {
    return 0;
  }

  const vpz = card.getEndGameBonusValue({ g, p });
  const valid = vpz.filter((vip) => vip.if === undefined || vip.if);
  const vps = valid.map((x) => x.vp);
  return sum(vps);
};

export const calculateScoreForCardsCore = (cards: Card[]): number => sum(cards.map((card) => card.coreValue));

export const calculateScoreForCardsBonus = (game: GameState, player: Player): number =>
  sum(player.cards.map((card) => calculateEndGameBonus(game, player, card)));

export const calculateScoreForFleetTrack = (player: Player): number =>
  fleetTrackVPs[player.fleetTrackPosition];

export const calculateScoreForInfluence = (game: GameState, player: Player): number => {
  const influences = unique(game.players.map((x) => x.influence)).sort((a, b) => b - a);
  const position = influences.indexOf(player.influence);
  const multiplier = [4, 2, 1, 1][position];
  return player.influence * multiplier;
};

export const calculateScoreForExtraCards = (player: Player): number =>
  player.cards.length <= 7 ? 0 : (player.cards.length - 7) * -10;

export const calculatePlayerScore = (game: GameState, player: Player): PlayerScore => ({
  endGameAbilities: 0,
  cardsCore: calculateScoreForCardsCore(player.cards),
  cardsBonus: calculateScoreForCardsBonus(game, player),
  fleetTrack: calculateScoreForFleetTrack(player),
  helium: player.helium * 3,
  sovereignty: player.sovereignty ? 10 : 0,
  influence: calculateScoreForInfluence(game, player),
  extraCards: calculateScoreForExtraCards(player),
});
