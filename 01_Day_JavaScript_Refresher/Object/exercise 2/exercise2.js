const users = {
      Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
      },
      Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
    }

// 1. Find the person who has many skills in the users object.
const findPersonWithManySkills = () => {
    const arr = [];
    for(let i in users) {
        arr.push(users[i].skills)
    }

    const hasMany = 
        arr.reduce((maxIndex, currentArray, currentArrayIndex, array) => {
            if(currentArray.length > array[maxIndex].length) {
                return currentArrayIndex;
            } else {
                return maxIndex
            }
        }, 0);

    const entries = Object.entries(users)

    const [key, val] = entries[hasMany]

    return `${key} has Many skill`
}

findPersonWithManySkills()
// 

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.
const loggedUsers = () => {
    let countLogged = 0;
    for (let i in users) {
        if (users[i].isLoggedIn === true) {
            countLogged ++
        }
    }
    return countLogged;
}
loggedUsers()

const muchPoint = () => {
    let countPoint = 0;
    for (let i in users) {
        if (users[i].points >= 50) {
            countPoint ++
        }
    }
    return countPoint;
}
muchPoint()
// 

// 3. Find people who are MERN stack developer from the users object
const checkMERNDev = () => {
      const arr = [];

      const mernDev = [];

      const result = [];

      for(let i in users) {
        arr.push(users[i].skills);
      };

      for(let i in arr){
        if(arr[i].includes("MongoDB", "Express", "React", "Node")){
            mernDev.push(i);
        };
      };

      const entries = Object.entries(users);

      for(const [key, value] of mernDev){
        result.push(entries[key][0]);
      };

      return result;
};
checkMERNDev();
// 

// 4. Set your name in the users object without modifying the original users object
const setName = (objs) => {
      const [key] = Object.entries(objs);
      users[key[0]] = key[1];
};
  
  setName({Anjas: {
                  email: 'Anjas@Anjas.com',
                  skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
                  age: 20,
                  isLoggedIn: false,
                  points: 40
                  }});
  
  // console.log(users);
// 

// 5. Get all keys or properties of users object
Object.keys(users);
// 

// 6. Get all the values of users object
Object.values(users);
// 

// 7. Use the countries object to print a country name, capital, populations and languages.
const countriesInfo = {
  Albania: {
    capital: 'Tirana',
    population: 2877797,
    languages: ['Albanian']
  },
  Bolivia: {
    capital: 'La Paz',
    population: 11633371,
    languages: ['Spanish', 'Quechua', 'Aymara']
  },
  Canada: {
    capital: 'Ottawa',
    population: 37664517,
    languages: ['English', 'French']
  },
  Denmark: {
    capital: 'Copenhagen',
    population: 5822763,
    languages: ['Danish']
  },
  Ethiopia: {
    capital: 'Addis Ababa',
    population: 114963588,
    languages: ['Amharic', 'Oromo', 'Tigrinya', 'Somali']
  },
  Finland: {
    capital: 'Helsinki',
    population: 5540720,
    languages: ['Finnish', 'Swedish']
  },
  Germany: {
    capital: 'Berlin',
    population: 83783942,
    languages: ['German']
  },
  Hungary: {
    capital: 'Budapest',
    population: 9660351,
    languages: ['Hungarian']
  },
  Ireland: {
    capital: 'Dublin',
    population: 4977400,
    languages: ['Irish', 'English']
  },
  Japan: {
    capital: 'Tokyo',
    population: 126476461,
    languages: ['Japanese']
  },
  Kenya: {
    capital: 'Nairobi',
    population: 53771296,
    languages: ['Swahili', 'English']
  }
};

for (let country in countriesInfo) {
  console.log(`Country: ${country}`);
  console.log(`Capital: ${countriesInfo[country].capital}`);
  console.log(`Population: ${countriesInfo[country].population}`);
  console.log(`Languages: ${countriesInfo[country].languages.join(', ')}\n`);
}
// 