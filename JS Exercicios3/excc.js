// 1)
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

// 2)
const numbers2 = [1, 2, 3, 4, 5];

const evenNumbers2 = numbers2.filter(number => number % 2 === 0);

console.log(evenNumbers2);

// 3)
const fruits = ['apple', 'banana', 'orange', 'kiwi'];

fruits.forEach(fruit => {
  console.log(fruit);
});

// 4)
const students = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 25 },
  { name: 'Mark', age: 22 },
];

students.forEach(student => {
  console.log(`Nome: ${student.name}, Idade: ${student.age}`);
});

// 5)
const students2 = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 25 },
  { name: 'Mark', age: 22 }
];

const studentNames = students2.map(student => student.name);

console.log(studentNames);