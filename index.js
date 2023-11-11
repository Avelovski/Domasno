let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

console.log(hasTea || hasMilk); //Does the student have either tea or milk?
console.log(hasCoffee && hasTea); // Does the student have both coffee and tea?
console.log(!hasTea); //Is it true that the student doesn't have tea?
console.log(hasCoffee && !hasMilk) && !(hasCoffee && hasMilk); //Does the student have either coffee or milk, but not both?
console.log(hasTea && hasMilk) || (hasCoffee && hasTea); // Is it true that the student has either tea and milk, or coffee and tea?
console.log(!hasCoffee && !hasTea); //Does the student have neither coffee nor tea?

const num1 = 10;
const num2 = 5;
const num3 = 8;
const num4 = 2;
const num5 = 12;
const num6 = 4;
const num7 = 3;

const result1 = num1 - num2 + (num3 * num4 + num5) - (num6 % num7);
console.log(result1);
const result2 = (num5 / num7) * ((num2 + num3) * num4) - (num1 - num6);
console.log(result2);
const result3 = num5 * num4;
console.log(result3);
const result4 = num1 * num4 - num5 + num5 / num4;
console.log(result4);
const result5 = num3 * num2 - (num6 + num7);
console.log(result5);

let number1 = 12;
let number2 = 4;

let sum = number1 + number2;
let diff = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;
let rem = number1 % number2;
console.log(sum, diff, mult, div, rem);
