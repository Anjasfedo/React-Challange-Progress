import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

console.log(countries);

console.log(webTechs)

let certainCountries = (name) => {
    if(countries.indexOf(name) >= 0) {
        console.log(name.toUpperCase())
    } else {
        countries.push(name)
    }
};

certainCountries('Ethiopia')

console.log(countries)

let existWebTech = (name) => {
    if(webTechs.indexOf(name) >= 0) {
        console.log(`${name} is a CSS preprocess`)
    } else {
        webTechs.push(name)
    }
};

existWebTech('Sass')

console.log(webTechs)