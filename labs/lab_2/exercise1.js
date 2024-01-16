let weight = 70
let height = 1.7
let BMI = weight / (height * 2)

if(BMI < 18.5) {
    console.log('Underweight', BMI)
} else if (BMI >= 18.5 && BMI < 25) {
    console.log('Normal weight', BMI)
} else if (BMI >=25 && BMI < 30) {
    console.log('Overweight')
} else {
    console.log('Obesity')
}