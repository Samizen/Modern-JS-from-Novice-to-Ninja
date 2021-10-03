localStorage.setItem('name', 'Mario');
localStorage.setItem('age', 50);

// Get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name);
console.log(age);

// Update data
localStorage.setItem('name', 'luigi');
name = localStorage.getItem('name');
localStorage.age = 40;
console.log(name);
console.log(age);

// Remove Data
localStorage.removeItem('name');
localStorage.clear();

