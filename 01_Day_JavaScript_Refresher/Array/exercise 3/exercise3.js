// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age 
ages.sort()
console.log(ages)

const minAge = ages[0];
const maxAge = ages[ages.length-1];
console.log(minAge);
console.log(maxAge);
// 

// - Find the median age(one middle item or two middle items divided by two) 
const medianAge = ages[Math.trunc((ages.length)/2)];
console.log(medianAge);
// 

// - Find the average age(all items divided by number of items) 
const avgAge = ages.reduce((x, y) => (x+y))/10;
console.log(avgAge);
// 

// - Find the range of the ages(max minus min) 
const rangeAge = maxAge - minAge;
console.log(rangeAge);
// 

// - Compare the value of (min - average) and (max - average), use abs() method
const compareMinAvg = Math.abs(minAge - avgAge);
const compareMaxAvg = Math.abs(maxAge - avgAge);

console.log(compareMinAvg);
console.log(compareMaxAvg);


// 2 .Slice the first ten countries from the countries array
import { countries } from './countries.js';

console.log(countries);

const sliceTen = countries.slice(0, 10);
console.log(sliceTen);
// 

// 3. Find the middle country(ies) in the countries array
const midCountries = countries[Math.trunc((countries.length)/2)];
console.log(midCountries);

// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const firstHalf = countries.splice(0, Math.round((countries.length)/2));

console.log(firstHalf);
console.log(countries);