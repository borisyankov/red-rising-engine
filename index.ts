import CARDS from "./cards/cards";

console.log("Count: ", CARDS.length);

let sumTotal = 0;
let evenTotal = 0;
let oddTotal = 0;
let tenOrLess = 0;
let twentyOrMore = 0;
CARDS.sort((a, b) => a.coreValue - b.coreValue).forEach((card) => {
  sumTotal += card.coreValue;
  if (card.coreValue % 2 == 0) evenTotal++;
  if (card.coreValue % 2 == 1) oddTotal++;
  if (card.coreValue <= 10) tenOrLess++;
  if (card.coreValue >= 20) twentyOrMore++;
  console.log(card.name, "|", card.color, "|", card.coreValue);
});
const averageCoreValue = sumTotal / CARDS.length;
console.log({ averageCoreValue, evenTotal, oddTotal, tenOrLess, twentyOrMore });
