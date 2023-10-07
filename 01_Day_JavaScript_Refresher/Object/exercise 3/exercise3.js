// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties 
// and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: "Anjas",
    lastName: "Fedo",
    income: [10, 30, 12, 15,30],
    expense: [5, 7, 9, 10, 3],
    totalIncome: () => {
        return personAccount.income.reduce((a, b) => {return a+b});
    },
    totalExpense: () => {
        return personAccount.expense.reduce((a, b) => {return a+b});
    },
    accoutInfo: () => {
        return `My name is ${personAccount.firstName} ${personAccount.lastName} and has ${personAccount.totalIncome()} Income also ${personAccount.totalExpense()} Expense`;
    },
    addIncome: (num) => {
        personAccount.income.push(num);
    },
    addExpense: (num) => {
        personAccount.expense.push(num);
    },
    accountBalance: () => {
        return personAccount.totalIncome() - personAccount.totalExpense();
    }
}

// console.log(personAccount.totalIncome())
// console.log(personAccount.totalExpense())
// console.log(personAccount.accoutInfo())

// console.log(personAccount.addIncome(10))
// console.log(personAccount.addExpense(2))
// console.log(personAccount)

// console.log(personAccount.accountBalance())
// 

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]

// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = (objs) => {
  const entries = Object.entries(users);
  users.forEach((obj) => {
    if(JSON.stringify(obj) === JSON.stringify(objs)) {
      console.log(`the user that he has already an account`)
     } else {
      users[entries.length] = objs;
     } 
  })
}
signUp({
_id: 'ghderc',
username: 'Thomas',
email: 'thomas@thomas.com',
password: '123333',
createdAt: '08/01/2020 10:00 AM',
isLoggedIn: false,
},)

signUp({
  _id: 'anjast',
  username: 'anjas',
  email: 'anjas@anjas.com',
  password: '123393',
  createdAt: '08/05/2020 11:00 AM',
  isLoggedIn: false,
},)
// console.log(users)
// 

// b. Create a function called signIn which allows user to sign in to the application
const signIn = (usernames) => {
  users.forEach((obj) => {
    if(obj['_id'] === usernames) {
      obj.isLoggedIn = true;
    }
  })
}
signIn('anjast')
// console.log(users)
// 

// The products array has three elements and each of them has six properties. 
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]
// a. Create a function called rateProduct which rates the product 
const rateProduct = (names, rate) => {
  products.forEach((obj) => {
    if (obj.name === names) {
      obj.ratings[obj.ratings.length] = rate
    }
  })
}
rateProduct('TV', { userId: 'anjas', rate: 4 })
// console.log(products)
// 

// b. Create a function called averageRating which calculate the average rating of a product
const averageRating = (names) => {
  let avg = 0;
  products.forEach((obj) => {
    if (obj.name === names) {
      for (let i in obj.ratings) {
        avg += obj.ratings[i].rate / obj.ratings.length
      }
    }
  })
  return avg
}
// console.log(averageRating('mobile phone'))
// 

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (names, user) => {
  products.forEach((obj) => {
    if (obj.name === names) {
      if (obj.likes.length > 0) {
        for (let i in obj.likes) {
            if (obj.likes[i] === user) {
              obj.likes = obj.likes.filter((like) => {
                like !== user
              })
            } else {
              obj.likes.push(user)
            }
          }
      } else {
        obj.likes.push(user)
      }
    }
  })
}

likeProduct('TV', 'fg12cy');
likeProduct('mobile phone', 'anjast');
likeProduct('Laptop', 'anjast');
// console.log(products)
// 