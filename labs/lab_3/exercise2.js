let intArr = [1, 2, 3, 4, 5];

let max = intArr[0];
let min = intArr[0];

intArr.forEach(e => {
    if(e > max) {
        max = e
    }
    if(e < min) {
        min = e
    }
});

console.log("Minimum:", min);
console.log("Maximum:", max);