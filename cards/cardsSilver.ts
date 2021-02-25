import { Card } from "../types";

export const banker: Card = {
  name: "Banker",
  color: "silver",
  coreValue: 10,
  endGameBonuses: "----",
};

export const ceo: Card = {
  name: "CEO",
  color: "silver",
  coreValue: 12,
  endGameBonuses: "18 if you have at least 5 Helium.",
};

export const investor: Card = {
  name: "Investor",
  color: "silver",
  coreValue: 15,
  endGameBonuses: "|>|",
};

export const loanShark: Card = {
  name: "Loan Shark",
  color: "silver",
  coreValue: 13,
  endGameBonuses: "7 if you have at least ???",
};

export const quicksilver: Card = {
  name: "Quicksilver",
  color: "silver",
  coreValue: 40,
  endGameBonuses: "-10 if...",
};

export const sponsor: Card = {
  name: "Sponsor",
  color: "silver",
  coreValue: 20,
  endGameBonuses: "2 for each of your influence tokens on the Institute.",
};

export const stockBroker: Card = {
  name: "Stock Broker",
  color: "silver",
  coreValue: 10,
  endGameBonuses: "5 for each Helium (max 25 points).",
};
