const pi = 3.14;
let radius = 10;

// Operators: =, -, *, /, **, %
// Order of operations: B O D M A S

// Shorthand
radius++;
console.log(radius);

radius+=2;
console.log(radius);

// Not a Number (NaN)
console.log('Samit'/pi);

// Concatenation of number and string:
console.log('The circle has ' + radius + 'cm radius');

// Template String to concatenate string and number variables
console.log(`The circle has ${radius} cm radius. To find it's area its square is multipled by ${pi}.`);
