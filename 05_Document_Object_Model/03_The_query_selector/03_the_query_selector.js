const para = document.querySelector('p');
// To access through CSS class:
const para2 = document.querySelector('.error');
console.log(para);
console.log(para2);

const paras = document.querySelectorAll('p');
console.log(paras); // Returns a NodeList, which is not an Array
// Can be used to isolate members like Array:
console.log(paras[0]);

const errors = document.querySelectorAll('.error');
console.log(errors);