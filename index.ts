import CARDS from "./cards/cards";
import { Color } from "./types";

console.log("Count: ", CARDS.length);

let sumTotal = 0;
let evenTotal = 0;
let oddTotal = 0;
let tenOrLess = 0;
let twentyOrMore = 0;
const coreByColor: Record<Color, number> = {
  blue: 0,
  brown: 0,
  copper: 0,
  gold: 0,
  gray: 0,
  green: 0,
  obsidian: 0,
  orange: 0,
  pink: 0,
  red: 0,
  silver: 0,
  violet: 0,
  white: 0,
  yellow: 0,
};
CARDS.sort((a, b) => a.coreValue - b.coreValue).forEach((card) => {
  sumTotal += card.coreValue;
  coreByColor[card.color] += card.coreValue;
  if (card.coreValue % 2 == 0) evenTotal++;
  if (card.coreValue % 2 == 1) oddTotal++;
  if (card.coreValue <= 10) tenOrLess++;
  if (card.coreValue >= 20) twentyOrMore++;
  console.log(card.name, "|", card.color, "|", card.coreValue);
});
const averageCoreValue = sumTotal / CARDS.length;
console.log({ averageCoreValue, evenTotal, oddTotal, tenOrLess, twentyOrMore });
console.log({ coreByColor });
