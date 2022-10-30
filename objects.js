// example activity1
// let person = {
//   name: 'Chadrine',
//   age: '30',
//   hobby: 'gardening',
// };

// console.log(person.name);
// console.log(person['name']);

// an other object declaration but more complex
// let offer = 'none';
// let time = 1200;
// const cafe = {
//   cafeName: 'whitesheep',
//   seatingCapacity: 100,
//   hasSpecialOffers: true,
//   drinks: ['cappuccino', 'latte', 'Filter coffee', 'Tea', 'Hot chocolate'],
//   breakfastOffer: 'free croissant with coffee',
//   lunchOffer: 'Free drink with surprisingly priced sandwich',
//   noOffer: 'Sorry no offer',
// };

// if (time < 1100) {
//   offer = cafe.breakfastOffer;
// } else if (time < 1500 && time >= 1100) {
//   offer = cafe.lunchOffer;
// } else {
//   offer = cafe.noOffer;
// }

// console.log(offer);

// creates alarm

// let day = 'Sunday';
// let alarm = '';

// const alarmMessage = {
//   weekendAlarm: 'No alarm needed',
//   weekdayAlarm: 'Get up at 7am',
// };

// if (day == 'Sunday' || day == 'Saturday') {
//   alarm = alarmMessage.weekendAlarm;
// } else {
//   alarm = alarmMessage.weekdayAlarm;
// }

// console.log(alarm);

// add a list of favourite songs to person object
// let person = {
//   name: 'Chadrine',
//   age: '30',
//   hobbies: ['gardening', 'walking'],
//   favoriteSongs: [
//     'Il faut pardoner: petit pays',
//     'sandy: Jim Rama',
//     'faya: mimie',
//     'National Anthem: Lana Del Rey',
//   ],
// };

// console.log(
//   ` My favourite songs are ${person.favoriteSongs[0]}, ${person.favoriteSongs[1]}, and ${person.favoriteSongs[2]} `
// );

// use functions within object

// let offer = 'none';
// let time = 1200;
// const cafe = {
//   cafeName: 'whitesheep',
//   seatingCapacity: 100,
//   hasSpecialOffers: false,
//   drinks: ['cappuccino', 'latte', 'Filter coffee', 'Tea', 'Hot chocolate'],
//   breakfastOffer: 'free croissant with coffee',
//   lunchOffer: 'Free drink with surprisingly priced sandwich',
//   noOffer: 'Sorry no offer',

//   openCafe() {
//     if (this.hasSpecialOffers) {
//       return 'Come on in! It is Time for a special offer!';
//     } else {
//       return 'Come on in! There is no special offer today, But We have got delicious meals at incredible prices!';
//     }
//   },
//   closeCafe() {
//     return 'we are closed, come back tomorrow!';
//   },
// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// practice activity 1: include sayHi function in person object

// let person = {
//   myName: 'Chadrine',
//   age: '30',
//   hobbies: ['gardening', 'walking'],
//   favoriteSongs: [
//     'Il faut pardoner: petit pays',
//     'sandy: Jim Rama',
//     'faya: mimie',
//     'National Anthem: Lana Del Rey',
//   ],

//   sayHi() {
//     return `Hello my name is ${this.myName}.`;
//   },
// };

// console.log(person.sayHi());

// activity 2: pet object with key=>values and Methods

// let pet = {
//   petName: 'bob',
//   typeOfPet: 'dog',
//   age: '1',
//   color: 'brown',

//   petIsEating() {
//     return `${this.petName} is eating`;
//   },

//   petIsDrinking() {
//     return 'is drinking';
//   },
// };

// console.log(`${pet.petIsEating()} and ${pet.petIsDrinking()}`);

// activity3: coffeeShop Object with methods

// let coffeeShop = {
//   branch: 'The best cafe',
//   drinks: {
//     drink1: 2,
//     drink2: 4,
//     drink3: 3,
//     drink4: 2.5,
//   },
//   food: {
//     menu1: 5,
//     menu2: 4.5,
//     menu3: 10,
//     menu4: 6,
//   },

//   drinksOrdered(choice) {
//     let drinksLength = Object.keys(this.drinks).length;
//     for (let i = 0; i < drinksLength; i++) {
//       if (choice == Object.keys(this.drinks)[i]) {
//         return `Your order is: ${Object.keys(this.drinks)[i]}: £${
//           Object.values(this.drinks)[i]
//         }`;
//       }
//     }
//   },
//   foodOrdered(foodChoice) {
//     let foodLength = Object.keys(this.food).length;
//     for (let i = 0; i < foodLength; i++) {
//       if (foodChoice == Object.keys(this.food)[i]) {
//         return `Your food order is: ${Object.keys(this.food)[i]}: £${
//           Object.values(this.food)[i]
//         }`;
//       }
//     }
//   },
// };

// console.log(coffeeShop.drinksOrdered('drink1'));
// console.log(coffeeShop.foodOrdered('menu1'));
// console.log(coffeeShop.drinksOrdered('drink2'));
// console.log(coffeeShop.foodOrdered('menu2'));
// console.log(coffeeShop.drinksOrdered('drink3'));
// console.log(coffeeShop.foodOrdered('menu3'));
// console.log(coffeeShop.drinksOrdered('drink4'));
// console.log(coffeeShop.foodOrdered('menu4'));
