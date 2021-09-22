// Booleans
console.log(true, false, 'true', 'false');

// Methods can return booleans
let email = 'samitpdl@gmail.com'

let result = email.includes('@'); // also works for arrays

// Comparision operators:
let age = 25;

console.log(age == 25);
console.log(age == 25.01);
console.log(age != 25.01);

// String comparison
let name = 'Shawn';
console.log(name == 'Shawn');
console.log(name == 'shawn');
console.log(name < 'Siawn');

// Loose vs Strict Comparison
/* == - Loose Comparison (Different types can be same value because of JS type conversion)
   === - Strict Comparison (Value and type comparison */
