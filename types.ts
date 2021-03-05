export type Color =
  | 'red'
  | 'brown'
  | 'obsidian'
  | 'pink'
  | 'gray'
  | 'blue'
  | 'yellow'
  | 'green'
  | 'violet'
  | 'orange'
  | 'silver'
  | 'white'
  | 'copper'
  | 'gold';

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

export type Player = {
  cards: Card[];
  fleetTrackPosition: number;
  helium: number;
  sovereignty: boolean;
  influence: number;
};

export type GameState = {
  deck: Card[];
  banished: Card[];
  board: Board;
  players: Player[];
};

export type Card = {
  name: string;
  color: Color;
  coreValue: number;
  deployAbility?: string;
  endOfGameAbility?: string;
  endGameBonuses?: string;
  blockAbility?: string;
  getEndGameBonusValue?: (params: { g: GameState; p: Player }) => VpPredicate[];
};

const houseApollo =
  'Take the first and the last turns. Also, whenever you gain the Sovereign token (even if you already have it), reveal and place (not deploy) the top card of the deck on any location.';

const houseCeres =
  'Begin the game with +1 card. Whenever you gain the Sovereign token (even if you already have it), banish any 1 card from a location of your choice. At the end of game (before scoring), banish 1 card from your hand.';

const houseDiana =
  'Whenever you gain the Sovereign token (even if you already have it), place 1 Influence on the Institute.';

const houseJupiter =
  'Whenever you gain the Sovereign token (even if you already have it), advance once on the Fleet Track.';

const houseMars = 'Whenever you gain the Sovereign token (even if you already have it), gain 1 Helium.';

const houseMinerva =
  'Whenever you gain the Sovereign token (even if you already have it), roll the Rising die and gain the corresponding bonus. If the result of the roll is the Sovereign token, select any other bons on the die.';
