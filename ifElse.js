// task 1
// let age = 14;
// if (age > 17) {
//   console.log('');
// } else {
// }

// let place = 'Manc';
// let weather = 'Rain';

// if (place == 'Manc' && weather == 'Sunny') {
//   console.log('Check again');
// } else if (place == 'Manc' && weather == 'Rain') {
//   console.log('Obvs');
// } else {
//   console.log(`What it isn't raining?`);
// }

// let day = 'Monday';

// if (day == 'Saturday' || day == 'Sunday') {
//   console.log('It is weekend!');
// } else {
//   console.log('When It is weekend?');
// }

//if statenent with multiple conditions

// let car = 'Peugeot';
// if (car == 'Ford' || car == 'GM') {
//   console.log('you have got an American car!');
// } else if (car == 'Peugeot' || car == 'Citroen') {
//   console.log('you have got a French boy!');
// } else if (car == 'Honda' || car == 'Toyota' || car == 'Suzuki') {
//   console.log('Japanese cars are dead quiet!');
// } else if (car == 'Mercedes') {
//   console.log('You have got a proper posh German!');
// } else if (car == 'Volkswagen') {
//   console.log('German are not that bad at all!');
// } else if (car == 'Hyundai' || car == 'Kia') {
//   console.log('South Korean cars are getting pupular!');
// } else {
//   console.log('Your car is not in the top ten companies in the world');
// }

// the switch way is better!

// let car = 'Citroen';

// switch (car) {
//   case 'Ford':
//   case 'GM':
//     console.log('you have got an American car!');
//     break;
//   case 'Peugeot':
//   case 'Citroen':
//     console.log('you have got a French boy!');
//     break;
//   case 'Honda':
//   case 'Toyota':
//   case 'Suzuki':
//     console.log('Japanese cars are dead quiet!');
//     break;
//   case 'Mercedes':
//     console.log('You have got a proper posh German!');
//     break;
//   case 'Volkswagen':
//     console.log('German are not that bad at all!');
//     break;
//   case 'Hyundai':
//   case 'Kia':
//     console.log('South Korean cars are getting pupular!');
//     break;
//   default:
//     console.log('Your car is not in the top ten companies in the world');
// }

// // the true example of switch

// const grade = 87;

// switch (true) {
//   case grade >= 70:
//     console.log('Distintion');
//     break;
//   case grade >= 60:
//     console.log('Merit');
//     break;
//   case grade >= 50:
//     console.log('Pass');
//     break;
//   default:
//     console.log('Failed');
// }

// // an other example
// let age = 40;

// if (age < 18) {
//   console.log('£8');
// } else if (age >= 18 && age <= 60) {
//   console.log('£10.95');
// } else {
//   onsole.log('7.50');
// }

// // activity 1: check if person is old enough to drink in the UK
// let age = 19;
// let country = 'us';
// if (age > 17 && country == 'UK') {
//   console.log('Yes I can serve you');
// } else {
//   console.log("You aren't old enough");
// }

// activity2: favourite pizza toppings
// let pizzaTopping = 'cheese';
// let favoriteTopping = [
//   'cheese',
//   'salami',
//   'bacon',
//   'cheese',
//   'salami',
//   'bacon',
// ];

// switch (true) {
//   case favoriteTopping.indexOf(pizzaTopping) !== -1:
//     console.log('This is an important ingredient for my pizza');
//     break;
//   case pizzaTopping == 'olive':
//   case pizzaTopping == 'artichoque':
//   case pizzaTopping == 'tunna':
//   case pizzaTopping == 'pinaple':
//     console.log(`I don't mind having ${pizzaTopping} on my pizza`);
//     break;
//   default:
//     console.log(`${pizzaTopping} should not be on pizza`);
// }

// // activity3: check if password is long enough
// let password = 'jsg dsh';

// password = password.split(' ').join('');

// if (password.length < 8) {
//   console.log('This password is too short!');
// } else {
//   console.log(password);
// }

// activity4: check divisibility of num by 3 or 5
// let num = 2;

// if (num % 3 === 0 || num % 5 === 0) {
//   console.log('This number is divisible by 3 or 5.');
// } else {
//   console.log(`${num} is not right, try again!`);
// }

// // activity5: check if a number is divisible by 3, 5 or both
// let theNumber = 2;

// switch (true) {
//   case theNumber % 3 == 0:
//     console.log("fizz");
//     break;
//   case theNumber % 5 == 0:
//     console.log("buzz");
//     break;
//   case theNumber % 3 == 0:
//   case theNumber % 5 == 0:
//     console.log("fizz buzz");
//     break;
//   default:
//     console.log(theNumber);
//     break;
// }

// // activity6: check if number is a palindrome
// let num = "20202";
// let numArray = num.split("");
// numArray.reverse();
// let revertedNum = numArray.join("");

// if (revertedNum === num) {
//   console.log(`${num} is a palindrome!`);
// } else {
//   console.log(`${num} is not a palindrome!`);
// }

// // activity7: console where person is a time of the day
// let time = 800;
// let placeOfWork = "Code Nation";
// let townOfHome = "My home town";

// if (time > 730 && time < 830) {
//   console.log(`I'm in the train from ${townOfHome} to ${placeOfWork}!`);
// } else if (time > 830 && time < 1730) {
//   console.log(`I'm at ${placeOfWork}!`);
// } else {
//   console.log(`I'm in ${townOfHome}!`);
// }

// // activiry8: find the index of the last vowel in the string.
// let randomString =
//   "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowelList = ["a", "e", "i", "o", "u"];
// let randomStringVowels = [];
// let vowelIndex = [];

// for (let i = 0; i < randomString.length; i++) {
//   if (vowelList.includes(randomString.charAt(i))) {
//     randomStringVowels.push(randomString.charAt(i));
//     vowelIndex.push(i);
//   }
// }

// let lastVowelIndex = vowelIndex[vowelIndex.length - 1];

// console.log(randomStringVowels);
// console.log(vowelIndex);
// console.log(`The index of the last vowel in the string is: ${lastVowelIndex}`);

// array.includes(item, fromIndex);
// // Activity9: check if the first and last letter of a string are equal

// let word = "learning";

// if (word.charAt(0) === word.charAt(word.length - 1)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // Activity10: check wether the sum of 2 numbers is even
// let num1 = 2;
// let num2 = 43;
// let sum = num1 + num2;
// if (sum % 2 == 0) {
//   console.log(sum);
//   return sum;
// } else {
//   console.log(num1 * num2);
//   return num1 * num2;
// }
