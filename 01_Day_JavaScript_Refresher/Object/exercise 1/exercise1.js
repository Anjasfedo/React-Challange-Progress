// 1. Create an empty object called dog
const dog = {};
// 

// 2. Print the the dog object on the console
// console.log(dog)
// 

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "doggy";
dog.legs = 4;
dog.color = "grey";
dog.age = 5;
dog.bark = () => "woof woof";
// 

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark())
// 

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = true;
dog.getDogInfo = () => `${dog.name} has ${dog.legs} legs with beautiful ${dog.color} color, his age is ${dog.age} years old. he often ${dog.bark()}`;

// console.log(dog)
// console.log(dog.getDogInfo())
// 