// Strings:
console.log('A String');

// String Concatenation:
let named = 'Double';
let add = 'Trouble'
console.log(named + ' ' + add);

// String Length:
console.log('A string'.length);

// Getting characters:
console.log(named[2]); // gets u

// String methods:
console.log(named.toUpperCase());
console.log(named.toLowerCase());
console.log(named.indexOf('a'));

let result = named.lastIndexOf('l');
result = named.slice(2, 5);
console.log(named.replace('D','B'))

console.log(result);

// Literal String
const title = "A Book of Souls";
const author = "Bruce Dickinson";
let likes = 11;

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);