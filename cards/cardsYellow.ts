import { Card } from "../types";

export const drVirany: Card = {
  name: "Dr. Virany",
  color: "yellow",
  coreValue: 15,
  endGameBonuses: "...",
};

export const groupCounselor: Card = {
  name: "Group Counselor",
  color: "yellow",
  coreValue: 35,
  endGameBonuses: "-1 per banished card.",
};

export const hypnotist: Card = {
  name: "Hypnotist",
  color: "yellow",
  coreValue: 15,
  endGameBonuses: "|>|",
};

export const pathologist: Card = {
  name: "Pathologist",
  color: "yellow",
  coreValue: 5,
  endGameBonuses:
    "10 if there are 5-9 banished cards at the beginning of end-game scoring. 25 if there are at least 10 banished cards at the beginning of end-game scoring.",
};

export const psychologist: Card = {
  name: "Psychologist",
  color: "yellow",
  coreValue: 20,
  endGameBonuses: "|>|",
};

export const researcher: Card = {
  name: "Researcher",
  color: "yellow",
  coreValue: 13,
  endGameBonuses:
    "17 if there are 4 or fewer banished cards at the beginning of end-game-scoring.",
};

export const surgeon: Card = {
  name: "Surgeon",
  color: "yellow",
  coreValue: 0,
  endGameBonuses: "|>| 5 for each Gold.",
};
