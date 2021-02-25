export type Color =
  | "red"
  | "brown"
  | "obsidian"
  | "pink"
  | "gray"
  | "blue"
  | "yellow"
  | "green"
  | "violet"
  | "orange"
  | "silver"
  | "white"
  | "copper"
  | "gold";

export type Card = {
  name: string;
  color: Color;
  coreValue: number;
  deployAbility?: string;
  endGameBonuses: string;
  blockAbility?: string;
  endOfGameAbility?: string;
};

export type GameState = {
  deck: Card[];
  banishedCards: Card[];
};

export type PlayerState = {
  atEndOfGameAbilities: any[];
  cards: Card[];
  fleetTrackPosition: number;
  helium: number;
  sovereignty: boolean;
  influence: number;
};
