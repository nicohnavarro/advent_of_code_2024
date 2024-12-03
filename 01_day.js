const input = `47918   11257
64417   70229
37597   78404
`;

const separator = "   ";

/**
 *
 * @param {string} input
 */
function formatInput(input) {
  const leftHand = [];
  const rightHand = [];
  const trimed = input
    .trim()
    .split("\n")
    .map((line) => line.split(separator).map((n) => Number(n)));

  for (let i = 0; i < trimed.length; i++) {
    leftHand.push(trimed[i][0]);
    rightHand.push(trimed[i][1]);
  }

  return { leftHand, rightHand };
}

const { leftHand, rightHand } = formatInput(input);
const mappedLeftHand = {};

const orderLeft = leftHand.sort((a, b) => a - b);
const orderRight = rightHand.sort((a, b) => a - b);
for (let num of orderLeft) {
  for (let compare of orderRight) {
    if (compare === num) {
      mappedLeftHand[num]
        ? (mappedLeftHand[num] = mappedLeftHand[num] + 1)
        : (mappedLeftHand[num] = 1);
    }
  }
  if (!mappedLeftHand[num]) mappedLeftHand[num] = 0;
}
console.log(mappedLeftHand);
let sum = 0;
for (let i = 0; i < orderLeft.length; i++) {
  const result = Math.abs(orderLeft[i] - orderRight[i]);
  sum += result;
}
console.log("1 Part:", num);

let sum_similarity = 0;
for (let i = 0; i < orderLeft.length; i++) {
  let num = orderLeft[i];
  const result = num * mappedLeftHand[num];
  sum_similarity += result;
}

console.log("2 Part:", sum_similarity);
