import {
  calculateEndGameBonus,
  calculateScoreForCards,
} from "../../../scoring/score";
import {
  ARLUS,
  BRIDGE,
  DANCER,
  DARROW,
  DEANNA,
  DEVELOPER,
  EO,
  EVEY,
  GARDENER,
  HARMONY,
  HOLIDAY,
  JOPHO,
  MODJOB,
  MUSTANG,
  NERO,
  ROQUE,
  SEFI,
  UNCLE_NAROL,
} from "../..";
import { NULL_GAME_STATE, NULL_PLAYER_STATE } from "../../../null";
import { CASSIUS } from "../../golds/cassius";

describe("Arlus", () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [ARLUS];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test("is worth 25 VP extra if with no Golds", () => {
    const cards = [ARLUS, DARROW, DANCER];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, ARLUS);
    expect(vp).toBe(25);
  });

  test("is not worth anything extra if one or more Golds", () => {
    const cards = [ARLUS, DARROW, NERO];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, ARLUS);
    expect(vp).toBe(0);
  });
});

describe("Dancer", () => {
  test("is worth 8 VP on it's own", () => {
    const cards = [DANCER];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(8);
  });

  test("is worth nothing extra if with Grays and Golds", () => {
    const cards = [DANCER, NERO, HOLIDAY];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, DANCER);
    expect(vp).toBe(0);
  });

  test("is  worth 11 VP extra if one no Golds but some Grays", () => {
    const cards = [DANCER, HOLIDAY];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, DANCER);
    expect(vp).toBe(11);
  });

  test("is worth 11 VP extra if one no Grays but some Golds", () => {
    const cards = [DANCER, NERO];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, DANCER);
    expect(vp).toBe(11);
  });

  test("is worth 11 + 11 VP extra if with no Grays and no Golds", () => {
    const cards = [DANCER, DARROW];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, DANCER);
    expect(vp).toBe(22);
  });
});

describe("Darrow", () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [DARROW];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test("is not worth anything extra if not 7 or more cards", () => {
    const cards = [DARROW, EO];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, DARROW);
    expect(vp).toBe(0);
  });

  test("is not worth 30 VP extra if with 7 or more cards", () => {
    const cards = [
      DARROW,
      CASSIUS,
      ROQUE,
      MUSTANG,
      DANCER,
      HARMONY,
      UNCLE_NAROL,
    ];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, DARROW);
    expect(vp).toBe(30);
  });
});

describe("Deanna", () => {
  test("is worth 9 VP on it's own", () => {
    const cards = [DEANNA];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(9);
  });

  test("is not worth anything extra if alone", () => {
    const cards = [DEANNA];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, DEANNA);
    expect(vp).toBe(0);
  });

  test("is not worth anything extra if with no Reds", () => {
    const cards = [DEANNA, GARDENER, DEVELOPER];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, DEANNA);
    expect(vp).toBe(0);
  });

  test("is not worth 26 VP extra if with nReds", () => {
    const cards = [DEANNA, DARROW];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, DEANNA);
    expect(vp).toBe(26);
  });
});

describe("Eo", () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [EO];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test("is worth maximum VP of 60 with all other reds", () => {
    const cards = [ARLUS, DANCER, DARROW, DEANNA, EO, HARMONY, UNCLE_NAROL];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, EO);
    expect(vp).toBe(60);
  });

  test("is worth -10 VP if with a Gray", () => {
    const cards = [EO, HOLIDAY];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, EO);
    expect(vp).toBe(-10);
  });

  test("is not worth any negative VP if with Bridge", () => {
    const cards = [EO, BRIDGE];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, EO);
    expect(vp).toBe(0);
  });

  test("is worth 10 extra for Reds, -10 for Grays and no change for Bridge", () => {
    const cards = [EO, DARROW, UNCLE_NAROL, HOLIDAY, BRIDGE];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, EO);
    expect(vp).toBe(10);
  });
});

describe("Harmony", () => {
  test("is worth 7 VP on it's own", () => {
    const cards = [HARMONY];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(7);
  });

  test("is worth 33 extra if alone", () => {
    const cards = [HARMONY];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, HARMONY);
    expect(vp).toBe(33);
  });

  test("is worth 33 extra if only with Reds, Pinks, Browns and/or Obsidians", () => {
    const cards = [HARMONY, DARROW, EVEY, GARDENER, SEFI];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, HARMONY);
    expect(vp).toBe(33);
  });

  test("is not worth anything extra if anything but Reds, Pinks, Browns and/or Obsidians", () => {
    const cards = [HARMONY, NERO];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, HARMONY);
    expect(vp).toBe(0);
  });
});

describe("Uncle Narol", () => {
  test("is worth 10 VP on it's own", () => {
    const cards = [UNCLE_NAROL];
    const vp = calculateScoreForCards(cards);
    expect(vp).toBe(10);
  });

  test("is worth 40 VP extra if with only cards of 10 or less core value", () => {
    const cards = [UNCLE_NAROL, DARROW, MODJOB, DEVELOPER, JOPHO];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, UNCLE_NAROL);
    expect(vp).toBe(40);
  });

  test("is not worth anything extra if one or more cards of more than 10 core value", () => {
    const cards = [UNCLE_NAROL, DARROW, NERO];
    const playerState = {
      ...NULL_PLAYER_STATE,
      cards,
    };
    const vp = calculateEndGameBonus(NULL_GAME_STATE, playerState, UNCLE_NAROL);
    expect(vp).toBe(0);
  });
});
