const now = new Date();
const before = new Date('February 1 2018 10:20:00');
const diff = now - before;

console.log(diff);
// Conversion of timestamp - typical conversion:
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins);
console.log(hours);
console.log(`The blog was written ${days} days ago`);

// Converting timestamps into date objects:
const timestamp = new Date(115431484238);
// We can now access any date methods and behaviors in this object
console.log(timestamp);