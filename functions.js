// let myFavCol = 'Red';
// const favColor = (color, favNum) => {
//   console.log(`My fav color is ${color} and My fav Number is ${favNum}`);
// };

// favColor(myFavCol, 20);

// favColor();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//   if (coffeeIsGrinding) {
//     console.log('Stopping the grind');
//     coffeeIsGrinding = false;
//   } else {
//     console.log('grinding is about to start');
//     coffeeIsGrinding = false;
//   }
// };

// pressGrindBeans();

// cahs withdrawal

// let accNumber = 282767598;

// const cashWithdrawal = (amount, accNum) => {
//   console.log(`withdraw ${amount} from ${accNum}.`);
// };

// cashWithdrawal(20, accNumber);

// const addUp = (num1, num2) => {
//   return num1 + num2;
// };

// addUp(7, 3);
// console.log(addUp(7, 3));

// // done!
// const multiplyByNineFifths = (num) => {
//   return num * (9 / 5);
// };

// const getFahrenheit = (celsius) => {
//   return multiplyByNineFifths(celsius) + 32;
// };

// console.log('The temperature is ' + getFahrenheit(15) + '°F');

// activity 1 (done but what does it do?)

// const factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(33));

// activity 2, add more variables to m,ake it look like a genuine receipt.

// let orderCount = 0;

// const takeOrder = (topping, drink) => {
//   console.log(`Pizza with ${topping} and ${drink}`);
//   orderCount++;
// };

// takeOrder('pineapple', 'Fanta');
// takeOrder('pineapple', 'Fanta');
// takeOrder('pineapple', 'Fanta');
// console.log(`We've got ${orderCount} orders`);

// cash machine activity: to me made dynamic with the html file!
const inputPin = document.getElementById('input');
let pinOnsettings = 277654;
let accountBalance = 500;

const withdraw = (pin, amount) => {
  if (pin === pinOnsettings && amount <= accountBalance) {
    accountBalance -= amount;
    console.log(`cash withdrawal: £${amount}`);
    console.log(`balance: ${accountBalance}`);
  } else {
    console.log(`You don't have enough cash in your account`);
  }
};

withdraw(inputPin, amount);
