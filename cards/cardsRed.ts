import { Card } from "../types";

export const arius: Card = {
  name: "Arius",
  color: "red",
  coreValue: 10,
  deployAbility: "",
  endGameBonuses: "25 if with no Golds.",
};

export const dancer: Card = {
  name: "Dancer",
  color: "red",
  coreValue: 8,
  endGameBonuses: "11 if with no Grays. 11 if with no Golds. ",
};

export const darrow: Card = {
  name: "Darrow",
  color: "red",
  coreValue: 10,
  deployAbility:
    "Gain any other non-Gold from this location. Banish Darrow unless you deployed him on a Gold.",
  endGameBonuses: "30 if you have 7 or more cards (including Darrow)",
};

export const deanna: Card = {
  name: "Deanna",
  color: "red",
  coreValue: 9,
  endGameBonuses: "26 if with another Red.",
};

export const eo: Card = {
  name: "Eo",
  color: "red",
  coreValue: 7,
  deployAbility:
    "Each opponent must reveal a Red. If they can't, they lose 1 Helium.",
  endGameBonuses: "10 for each other Red. - 10 if with a Gray except Bridget.",
};

export const harmony: Card = {
  name: "Harmony",
  color: "red",
  coreValue: 10,
  endGameBonuses: "33 if with only Reds, Pinks, Browns and/or Obsidians.",
};

export const uncleNarol: Card = {
  name: "Uncle Narol",
  color: "red",
  coreValue: 10,
  deployAbility: "Gain 2 Helium.",
  endGameBonuses:
    "40 if with only cards having core values of 10 points or less.",
};
