// // Declare coffeeOrder array
// let coffeeOrder = ["Alex - Cortado", "Ben - Cortado ", "Charlie - What's new"];

// // Update the above array
// coffeeOrder[1] = "Ann - Vanilla latte";

// // Add an Item at the end of the array
// coffeeOrder.push("Donna - espresso");

// console.log(coffeeOrder);
// console.log(coffeeOrder[1]);
// console.log(coffeeOrder.length);

// // Remove the last item from the array
// coffeeOrder.pop();
// console.log(coffeeOrder);

// // Activity1: array of favourite songs
// let myFavouriteSongs = [
//   "Faya - Mimie",
//   "Il faut pardoner - Petit pays",
//   "The national anthem - Lana Del Rey",
// ];

// console.log(myFavouriteSongs);
// myFavouriteSongs.push("Madingwa - Daphne");
// console.log(myFavouriteSongs);
// myFavouriteSongs.pop();
// console.log(myFavouriteSongs);

// // Activity2: demonstrate the use of map method
// let listOfwords = [
//   "ahjhghjkh",
//   "ahjhghjkh",
//   "ahjhghjkh",
//   "ahjhghjkh",
//   "ahjhghjkh",
// ];
// console.log(listOfwords);
// // Convert the listOfwords items to uppercase and store the in a new array called wordsToUpperCase
// const wordsToUpperCase = listOfwords.map((word) => word.toUpperCase());
// console.log(wordsToUpperCase);

// // Loops
// let favouriteDrink = [
//   "Coke",
//   "Fanta",
//   "Tonic",
//   "fanta",
//   "Monster",
//   "Fanta",
//   "baileys",
//   "Red bul",
// ];

// // log each item of favouriteDrink to the console
// for (let i = 0; i < favouriteDrink.length; i++) {
//   console.log(favouriteDrink[i]);
// }

// // log all the numbers divisible by 2 between 0 and 20 included
// let multiplesOfTwo = [];

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     multiplesOfTwo.push(i);
//   }
// }

// console.log(
//   `The numbers divisible by 2 between 0 and 20 included are: ${multiplesOfTwo}.`
// );

// let age = 15;

// while (age < 18) {
//   console.log("You're a child!");
//   //without this we would run in to an ifinite loop because then the condition is always true!
//   age++;
// }
// console.log("You're an adult!.");

// // log the currentCard while it's different than Spade
// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while (currentCard != "Spade") {
//   console.log(currentCard);
//   //assign the item at the calculated index to currentCard
//   currentCard = cards[Math.floor(Math.random() * 4)];
// }

// console.log(currentCard);

// // Activity1

// let favFilms = ["movie1", "movie2", "movie3", "movie4", "movie5"];

// favFilms.push("movie6", "movie7");
// console.log(favFilms);

// for (let i = 0; i < favFilms.length; i++) {
//   console.log(`One of my favourite movies is: ${favFilms[i]}`);
// }

// // activity2: Generate six numbers and log them to the console.
// for (let i = 0; i < 6; i++) {
//   let randomNumber = Math.floor(Math.random() * 50);
//   console.log(randomNumber);
// }
// console.log("End");

// // activity3: countdown from 9 to 0
// let nubersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// for (let i = 9; i >= 0; i--) {
//   console.log(nubersArray[i]);
// }

// // activity4: to be checked
// let films = ["movie1", "movie2", "movie3", "movie4"];

// for (let i = 0; i < films.length; i++) {
//   console.log(films[i]);
//   if (films[2] == "Ghostbusters") {
//     console.log("yay it's Ghostbusters");
//   } else {
//     console.log("boo! we want Ghostbusters!");
//   }
// }

// // activity5
// for (let i = 0; i < 6; i++) {
//   let randomNumber = Math.floor(Math.random() * 30);
//   console.log(randomNumber);
//   if (randomNumber % 7 == 0) {
//     console.log(`${randomNumber} is divisible by 7`);
//   } else {
//     console.log(`${randomNumber} is not divisible by 7`);
//   }
// }

// // activity6 iterate over 2 arrays and log the matching fans
// let JohnsFans = ["Boris", "David", "Patricia", "Martha"];
// let hannahsFans = ["Carol", "Patricia", "Martha", "Synthia"];

// for (let i = 0; i < JohnsFans.length; i++) {
//   let fan = JohnsFans[i];
//   for (let i = 0; i < hannahsFans.length; i++) {
//     if (fan == hannahsFans[i]) {
//       console.log(fan);
//     }
//   }
// }

// // activity6: The do...While loop
// let numArray = [7, 9, 6, 40, 10, 90];
// let i = 0;
// do {
//   console.log(numArray[i]);
//   i++;
// } while (numArray[i] % 2 == 0);
