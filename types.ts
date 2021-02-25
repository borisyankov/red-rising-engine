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

export type VpPredicate = {
  vp: number;
  if?: boolean;
};

export type Board = {
  jupiter: Card[];
  mars: Card[];
  luna: Card[];
  theInstitute: Card[];
};

export type GameState = {
  deck: Card[];
  banished: Card[];
  board: Board;
};

export type PlayerState = {
  atEndOfGameAbilities: any[];
  cards: Card[];
  fleetTrackPosition: number;
  helium: number;
  sovereignty: boolean;
  influence: number;
};

export type Card = {
  name: string;
  color: Color;
  coreValue: number;
  deployAbility?: string;
  endOfGameAbility?: string;
  endGameBonuses?: string;
  blockAbility?: string;
  getEndGameBonusValue?: (params: {
    g: GameState;
    p: PlayerState;
  }) => VpPredicate[];
};

const mars =
  "Whenever you gain the Sovereign token (even if you already have it), gain 1 Helium.";
