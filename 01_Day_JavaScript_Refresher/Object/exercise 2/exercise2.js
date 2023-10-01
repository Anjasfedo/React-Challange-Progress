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

    // console.log(hasMany)

    const entries = Object.entries(users)

    const [key, val] = entries[hasMany]
    // console.log(key)
    // console.log(val)

    return `${key} has Many skill`
    
    // const nama = Object.entries(users)

    // const skill = []

    // for (const [key, val] of nama) {
    //     skill.push(val.skills)
    // }

    // const manySkill = skill.reduce((long, curr) => {
    //     return (curr.length > long.length) ? curr : long
    // }, [])

    // console.log(manySkill)

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
const arr = [];
for(let i in users) {
    arr.push(users[i].skills)
}


// 4. Set your name in the users object without modifying the original users object

// 5. Get all keys or properties of users object

// 6. Get all the values of users object

// 7. Use the countries object to print a country name, capital, populations and languages.