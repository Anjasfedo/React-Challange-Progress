// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName('Anjas', 'Fedo'))
// 

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
}
console.log(addNumbers(1, 2))
// 

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function areaOfCircle(r) {
    return Math.PI * Math.pow(r, 2);
}
console.log(areaOfCircle(2))
// 

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
const convertCelciusToFahrenheit = (oC) => {
    return (oC * (9/5)) + 32
}
console.log(convertCelciusToFahrenheit(5))
// 

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
const calculateBmi = (weight, height) => {
    let bmi = weight / (Math.pow(height/100, 2))
    return bmi < 18.5 ? 'Underweight' :
            bmi >= 18.5 && bmi <= 24.5 ? 'Normal' :
            bmi >= 25 && bmi <= 29.5 ? 'Overweight' :
            'Obesse'
}
console.log(calculateBmi(80, 170))
// 

// 6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
    month = month.toLowerCase()
    if(month === 'september' || month === 'october' || month === 'november') {
        return 'The Season is Autumn'
    } else if (month === 'december' || month === 'january' || month === 'february') {
        return 'The Season is Winter'
    } else if (month === 'march' || month === 'april' || month === 'may') {
        return 'The Season is Spring'
    } else if (month === 'june' || month === 'july' || month === 'august') {
        return 'The Season is Summer'
    } else {
        return 'Month is invalid'
    }
}
console.log(checkSeason('ApRiL'))
