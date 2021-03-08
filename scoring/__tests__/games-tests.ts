import { NULL_CARD, NULL_CARDS } from '../../null';
import { GameState, Player } from '../../types';
import * as C from '../../cards';
import { calculatePlayerScore } from '../score';

describe('Real games score', () => {
  const b: Player = {
    fleetTrackPosition: 0,
    helium: 6,
    sovereignty: true,
    influence: 9,
    cards: [
      C.JUDGE, // 21
      {
        ...C.HOLIDAY, // 5
        extraColor: 'blue',
      },
      C.BONERIDERS, // 15
      C.QUICKSILVER, // -30
      C.ROQUE, // 5
      C.CYTHER, // 16
      C.BANKER,
    ],
  };
  const p: Player = {
    fleetTrackPosition: 8,
    helium: 7,
    sovereignty: false,
    influence: 6,
    cards: [
      C.COLONEL_VALENTIN, // 0
      C.THE_PAX, // 0
      C.AUCTIONEER,
      C.CONVERSATIONALIST, // 15
      C.VLOGGER, // 23
      C.VICTRA, // 0
      C.PRIESTESS, // 0
    ],
  };
  const m: Player = {
    fleetTrackPosition: 1,
    helium: 3,
    sovereignty: false,
    influence: 8,
    cards: [
      C.FITCHNER, // 10, one Gray is Red, is not with Sevro by a Orange (CAN'T be Sevro as already used)
      C.MUSTANG, // 5 * 7 => 35
      C.DATAPORT_SPECIALIST, // 26, one Gray is Blue
      C.SURGEON, // 20
      C.LYSANDER, // 20
      C.CASSIUS, // 40, orange is Darrow
      C.FIREWALL_EXPERT, // 0
      {
        ...C.UGLY_DAN, // 10
        extraColor: 'red',
      },
      {
        ...C.TRIGG, // 5
        extraColor: 'blue',
      },
      {
        ...C.RAZOR_DESIGNER, // 13
        name: 'Darrow',
      },
    ],
  };
  const game: GameState = {
    deck: NULL_CARDS,
    banished: NULL_CARDS, // ???
    board: {
      jupiter: [C.DIPLOMAT, C.MODJOB, C.UNCLE_NAROL],
      mars: [C.LOAN_SHARK],
      luna: [C.MASSEUSE, C.DANTO, C.LAWYER, C.CEO, C.MORNING_STAR],
      theInstitute: [C.POLITICIAN],
    },
    players: [b, p, m],
  };

  test('game score for player B is correctly calculated', () => {
    const result = calculatePlayerScore(game, b);
    expect(result).toEqual({
      endGameAbilities: 0,
      cardsCore: 124,
      cardsBonus: 32,
      fleetTrack: 0,
      helium: 18,
      sovereignty: 10,
      influence: 36,
      extraCards: 0,
    });
  });

  test('game score for player P is correctly calculated', () => {
    const result = calculatePlayerScore(game, p);
    expect(result).toEqual({
      endGameAbilities: 0,
      cardsCore: 104,
      cardsBonus: 38,
      fleetTrack: 34,
      helium: 21,
      sovereignty: 0,
      influence: 6,
      extraCards: 0,
    });
  });
  test('game score for player M is correctly calculated', () => {
    const result = calculatePlayerScore(game, m);
    expect(result).toEqual({
      endGameAbilities: 0,
      cardsCore: 154,
      cardsBonus: 179,
      fleetTrack: 1,
      helium: 9,
      sovereignty: 0,
      influence: 16,
      extraCards: -30,
    });
  });
});
