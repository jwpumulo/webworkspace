//js with server/ 06_02_destructuring.js

let {
  print
} = require('./06_01_module');

print('Hello');
//console.assertlog(plus(1,2));



// 1) Object

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 37,
  email: "john@gmail.com",
  coutry: "USA"
};

let {
  lastName,
  email
} = person;
console.log(lastName, email);
console.log(person.lastName);

function getFullName({
  firstName,
  lastName
}) {

  console.log(`${firstName}, ${lastName}`);
}

getFullName(person);

// 2)Array

let scores = [100, 80, 90];

let [a, b, c] = scores;
console.log(a);
console.log(b);
console.log(c);