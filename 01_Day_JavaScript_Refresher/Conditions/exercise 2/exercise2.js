// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const checkGrades = scores => {
    if (scores >= 80 && scores <= 100) {
        return 'A'
    } else if (scores >= 70 && scores < 90) {
        return 'B'
    } else if (scores >= 60 && scores < 70) {
        return 'C'
    } else if (scores >= 50 && scores < 60) {
        return 'D'
    } else if (scores < 50) {
        return 'F'
    } else {
        return 'invalid scores'
    }
}
// console.log(checkGrades(90))
// console.log(checkGrades(75))
// console.log(checkGrades(67))
// console.log(checkGrades(53))
// console.log(checkGrades(31))
// console.log(checkGrades(10000))
// 

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
const checkSeason = month => {
    if(month === 'September' || month === 'October' || month === 'November') {
        return 'The Season is Autumn'
    } else if (month === 'December' || month === 'January' || month === 'February') {
        return 'The Season is Winter'
    } else if (month === 'March' || month === 'April' || month === 'May') {
        return 'The Season is Spring'
    } else if (month === 'June' || month === 'July' || month === 'August') {
        return 'The Season is Summer'
    } else {
        return 'Month is invalid'
    }
}
// console.log(checkSeason('September'))
// console.log(checkSeason('January'))
// console.log(checkSeason('May'))
// console.log(checkSeason('August'))
// 

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
const checkWeekend = day => {
    const days = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
    if (days === 'Saturday' || days === 'Sunday') {
        return `${days} is a weekend`;
    } else if (days === 'Monday' || days === 'Tuesday' || days === 'Wednesday' || days === 'Thursday' || days === 'Friday') {
        return `${days} is a working day`;
    }
};
// console.log(checkWeekend('saturday'));
// console.log(checkWeekend('friDaY'));
// 