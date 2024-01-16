let weight = 120
let height = 1.7
let BMI = weight / (height * 2)

if(BMI < 18.5) {
    console.log('Underweight')
    let expectedWeight = (18.5 * height *2) - weight;
    console.log(`You need to gain about ${Math.round(expectedWeight)} to have a normal weight`)
} else if (BMI >= 18.5 && BMI < 25) {
    console.log('Normal weight, Your\'s fine')
} else if (BMI >=25 && BMI < 30) {
    console.log('Overweight')
    let expectedWeightTo = weight - (18.5 * height *2) ;
    let expectedWeightFrom = weight - (24.9 * height *2) ;
    console.log(`You need to decrease about from ${Math.round(expectedWeightFrom)} to ${Math.round(expectedWeightTo)} to have a normal weight`)
} else {
    console.log('Obesity')
    let expectedWeightTo = weight - (18.5 * height *2) ;
    let expectedWeightFrom = weight - (24.9 * height *2) ;
    console.log(`You need to decrease about from ${Math.round(expectedWeightFrom)} to ${Math.round(expectedWeightTo)} to have a normal weight`)
}