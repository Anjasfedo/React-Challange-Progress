
// Declare an empty array;
let array1 = [];
//

// Declare an array with more than 5 number of elements
let array2 = ['1', '2', '3', '4', '5'];
// 

// Find the length of your array
let arrayLength = array2.length;
console.log(arrayLength);
// 

// Get the first item, the middle item and the last item of the array
let firstItem = array2[0];
console.log(firstItem);

let middleItem = array2[Math.trunc((array2.length)/2)];
console.log(middleItem);

let lastItem = array2[array2.length-1];
console.log(lastItem);
// 

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    'string',
    1,
    ['string'],
    {'a': 'b'},
    true
];
// 

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 

// Print the array using console.log()
console.log(itCompanies);
// 

// Print the number of companies in the array
console.log(itCompanies.length);
// 

// Print the first company, middle and last company
console.log(itCompanies[0]);

console.log(itCompanies[Math.trunc((itCompanies.length)/2)]);

console.log(itCompanies[itCompanies.length-1]);
// 

// Print out each company
itCompanies.forEach((item) => console.log(item));
// or 
for (let i in itCompanies) {
    console.log(itCompanies[i]);
};
// 

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((item) => console.log(item.toUpperCase()));
// 

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let itCompaniesSentence = itCompanies;
let oracle = itCompanies.slice(itCompanies.length-2, 6);
let amazon = itCompanies.slice(itCompanies.length-1);
let restCompany = itCompanies.slice(0, 5).join(', ');

let sentence = `${restCompany}, ${oracle} and ${amazon} are big IT companies`;
console.log(sentence);
// 

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let certainCompanies = (name) => {
    if(itCompanies.indexOf(name) >= 0) {
       return name 
    } else {
        return "a company not found"
    }
};
 
console.log(certainCompanies('Amazon'));
console.log(certainCompanies('Naspad Mubil'));
// 

// Filter out companies which have more than one 'o' without the filter method
let moreO = itCompanies.filter((item) => item.includes('oo'));
console.log(moreO);
// 

// Sort the array using sort() method
console.log(itCompanies.sort());
//

// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// 

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// 

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, itCompanies.length));
//

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));
// 

// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);
// 

// Remove the middle IT company or companies from the array
itCompanies.splice(2, 1);
console.log(itCompanies);
//
 
// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
// 

// Remove all IT companies
itCompanies.splice(0);
console.log(itCompanies);
// 