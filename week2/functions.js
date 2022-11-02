// let string = "20202";

// const reverseString = (string) => {
//   let array = string.split("");
//   let reverseArray = array.reverse();
//   let JoinArray = reverseArray.join("");
//   return JoinArray;
// };
// console.log(reverseString(string));
//  fix this... done
// let array = [
//   ["drink1", "drink2", "drink3"],
//   ["breakfast1", "breakfast2", "breakfast3"],
//   ["", "drink1", "drink1"],
// ];

// console.log(array[1][2]);

const dataChecker = (string, rank) => {
  if (string === "codenation" && rank === 1) {
    console.log(`the ${string} is number ${rank}`);
  } else if (string === "codenation" && rank !== 1) {
    console.log(`the ${string} isn't number ${rank}`);
  } else {
    console.log(`we don't have any data about ${string}'s ${rank}`);
  }
};

dataChecker("a", 2);
