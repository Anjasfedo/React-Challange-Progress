// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.
const capialize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const dayOfMonth = month => {
    const months = capialize(month);
    
    return (months === "January") ? `${months} has 31 day`
    : (months === "February") ? `${months} has 28 day`
    : (months === "March") ? `${months} has 31 day`
    : (months === "April") ? `${months} has 30 day`
    : (months === "May") ? `${months} has 31 day`
    : (months === "June") ? `${months} has 30 day`
    : (months === "July") ? `${months} has 31 day`
    : (months === "August") ? `${months} has 31 day`
    : (months === "September") ? `${months} has 30 day`
    : (months === "October") ? `${months} has 31 day`
    : (months === "November") ? `${months} has 30 day`
    : (months === "December") ? `${months} has 31 day`
    : "invalid Month";
}

console.log(dayOfMonth("february"))
console.log(dayOfMonth("ocTOBer"))