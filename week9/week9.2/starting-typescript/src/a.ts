// let x: number = 10;
// x = 'Shubham';
// console.log(x);

// let a: any = 'Shubham';
// a = 12;
// console.log(a);

// Greet function
// function greet(firstname: string) {
//   console.log(`Hello ${firstname}`);
// }
// greet('Shubham');

// Sum of 2 numbers
// function sum(a: number, b: number): number {
//   return a + b;
// }
// const value = sum(1, 2);
// console.log(value);

// Return true or false based on if a user is 18+
// function isLegal(age: number): boolean {
//   return age >= 18 ? true : false;
// }
// const result = isLegal(18);
// console.log(result);

// Create a function that takes another function as input, and runs it after 1 second.
// function delay(fn: () => void) {
//   setTimeout(fn, 1000);
// }
// delay(() => {
//   console.log('hello after 1 second');
// });

// Interfaces: Assigning type to object.
interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}
function isLegal(user: User): boolean {
  return user.age >= 18 ? true : false;
}
const johnDoe: User = {
  firstName: 'John',
  lastName: 'Doe',
  age: 16,
};
console.log(isLegal(johnDoe));
