import { readFileSync } from "fs";

function readTxt() {
  try {
    const data = readFileSync("03_day_input.txt");
    return data.toString();
  } catch (error) {
    console.error(`Got and error`);
  }
}
const text = readTxt();

// Part 1:
function resolvePart1(text) {
  const mulSubString = text.split("mul");
  const calculate = [];

  for (const value of mulSubString) {
    if (value.startsWith("(")) {
      const firstValue = value.split("(")[1];
      const cutValue = String(firstValue.split(")")[0]);
      if (cutValue.split(",").length - 1 === 1) {
        calculate.push(cutValue);
      }
    }
  }
  const sumatory = [];
  for (let sum of calculate) {
    const values = sum.split(",");
    if (values[0].length <= 3 && values[1].length <= 3) {
      const value = values.reduce((acc, value) => value * acc, 1);
      sumatory.push(value);
    }
  }

  const result = sumatory.reduce((acc, value) => value + acc, 0);
  return result;
}

const result1 = resolvePart1(text);
console.log(result1);

// Part 2:
const enables = "do()";
const until = "don't()";

/**
 *
 * @param {string} text
 * @returns {string}
 */
function trimEnables(text) {}

trimEnables(text);

/**
 *
 * @param {string} input
 * @returns {string}
 */
function removeTextBetween(input) {
  return input.replace(/don't\(\)(?:(?!do\(\)).)*do\(\)/gs, "");
}

const newText = removeTextBetween(text);
const splitNewText = newText.split(until);
console.log(splitNewText.length);
const result2 = resolvePart1(splitNewText[0]);
console.log(result2);
