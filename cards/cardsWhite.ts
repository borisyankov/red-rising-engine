import { Card } from "../types";

export const judge: Card = {
  name: "Judge",
  color: "white",
  coreValue: 10,
  endGameBonuses: "3 for each of your ...",
};

export const justice: Card = {
  name: "Justice",
  color: "white",
  coreValue: 15,
  endGameBonuses: "|>|",
};

export const magistrate: Card = {
  name: "Magistrate",
  color: "white",
  coreValue: 20,
  endGameBonuses: "15 if you have at least 3 helium. ....",
};

export const martyr: Card = {
  name: "Martyr",
  color: "white",
  coreValue: 15,
  endGameBonuses: "|>|",
};

export const orator: Card = {
  name: "Orator",
  color: "white",
  coreValue: 19,
  endGameBonuses: "21 if you ...",
};

export const priestess: Card = {
  name: "Priestess",
  color: "white",
  coreValue: 20,
  endGameBonuses: "20 if only cards having core values of at least 20 points.",
};

export const seer: Card = {
  name: "Seer",
  color: "white",
  coreValue: 19,
  endGameBonuses: "11 if you have the Sovereign token.",
};
