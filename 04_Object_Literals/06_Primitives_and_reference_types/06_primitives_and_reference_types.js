// Primitive data types are stored in a stack

let scoreOne = 50;
const scoreTwo = scoreOne;
console.log(`scoreOne, before: ${scoreOne}`);
console.log(`scoreTwo, before: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne, after: ${scoreOne}`);
console.log(`scoreTwo, after: ${scoreTwo}`);

// Reference data types are stored in a heap.
// Heap stores the object itself and a pointer is created in stack
let userOne = {
    name:'Shawn',
    alias: 'HBK'
}
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.alias = "Heart Break Kid"

console.log(userOne, userTwo);


