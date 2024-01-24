let intArr = [1, 2, 3, 4, 5, 6];

let countEven = 0;
let countOdd = 0;

intArr.forEach(e => e % 2? countOdd++ : countEven++);

console.log("Even numbers:", countEven);
console.log("Odd numbers:", countOdd);