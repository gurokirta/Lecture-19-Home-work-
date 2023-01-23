"use strict";

// Task #1

// do {
//   var number_one = parseInt(prompt("შეიყვანეთ პირველი რიცხვი 0-დან 200-მდე"));
// } while (number_one < 0 || number_one > 200);

// do {
//   var number_two = parseInt(prompt("შეიყვანეთ მეორე რიცხვი 0-დან 200-მდე"));
// } while (number_two < 0 || number_two > 200);

// while (number_one > number_two) {
//   number_one = number_one + number_two;
//   number_two = number_one - number_two;
//   number_one = number_one - number_two;
// }

// var faqt1 = 1;
// var faqt2 = 1;

// for (var i = 1; i <= number_one; i++) {
//   faqt1 *= i;
// }

// for (var i = 1; i <= number_two; i++) {
//   faqt2 *= i;
// }

// // console.log(faqt1);
// // console.log(faqt2);

// var number1 = 1;
// var counter = 0;
// var sum = 0;
// for (var i = 0; i < number_two; i++) {
//   if (i > number_one) {
//     console.log(i);
//     sum += i;
//     counter++;
//   }
// }

// console.log(
//   "პირველსა და მეორე რიცხსვებს შორის მოთავსებული რიცხვების რაოდ.",
//   counter
// );
// console.log("მოთავსებული რიცხსვების ერთმანეთზე მიმატებთ მიღებული ჯამი", sum);

// var avgNumber = sum / counter;
// console.log("საშუალო არითმეტიკული", avgNumber);

// Task #2

var number_one = 135;
var number_two = 371;
var randomNum = 0;
var sum = 0;
var counter = 0;
// do {
//   var user_number = parseInt(prompt("შეიყვანეთ რიცხვი 135 დან 371 მდე"));
// } while (user_number <= 135 || user_number >= 371);

var user_number = parseInt(prompt("შეიყვანეთ რიცხვი "));

for (var i = 0; i < user_number; i++) {
  randomNum = Math.round(
    Math.random() * (number_two - number_one) + number_one
  );
  if (i > 135 && randomNum % 2 === 0) {
    console.log(randomNum);
    sum += randomNum;
    counter++;
  }
}
var avgNumber = sum / counter;

console.log(`რიცხვების რაოდენობა ${counter}`);
console.log(`რიცხვების ჯამი ${sum}`);
console.log(`საშუალო არითმეტიკული ${avgNumber}`);

// Task #3

// var currencyUSD = 2.7;
// var currencyEUR = 2.946;
// var currencyGBP = 3.362;

// var user_value = 100;
// var user_value1 = 0;

// var user_choose = prompt("აირჩეთ ვალუტა : USD , EUR , GBP");

// switch (user_choose) {
//   case "usd":
//     user_value1 = Math.round(user_value / currencyUSD);
//     console.log(`${user_value1} USD`);
//     break;
//   case "eur":
//     user_value1 = Math.round(user_value / currencyEUR);
//     console.log(`${user_value1} EUR`);
//     break;
//   case "gbp":
//     user_value1 = Math.round(user_value / currencyGBP);
//     console.log(`${user_value1} GBP`);
//     break;
//   default:
//     prompt(
//       "შეიყვანეთ სწორი ვალუტა , მაგ : USD, EUR or GBP. თუ გინდათ რომ მიიღოთ სასურველი შედეგი"
//     );
// }
