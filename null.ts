import { Board, Card, GameState, Player } from './types';

export const NULL_CARD: Card = {
  name: '',
  color: 'gray',
  coreValue: 0,
};

export const NULL_CARDS: Card[] = [];

export const NULL_PLAYER: Player = {
  cards: [],
  fleetTrackPosition: 0,
  helium: 0,
  sovereignty: false,
  influence: 0,
};

export const NULL_BOARD: Board = {
  jupiter: [],
  mars: [],
  luna: [],
  theInstitute: [],
};

export const NULL_GAME_STATE: GameState = {
  deck: NULL_CARDS,
  banished: NULL_CARDS,
  board: NULL_BOARD,
  players: [NULL_PLAYER],
};
