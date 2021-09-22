// Regular function equivalent:
/* const calcArea = function(radius) {
    return 3.14 * radius ** 2;
} */

// Arrow Function
const calcArea = (radius) => {
    return 3.14 * radius ** 2;
};

// Can be shortened to:
const calcuArea = radius => {
    return 3.14 * radius ** 2;
}

const calculArea = radius => 3.14 * radius ** 2;

const area = calculArea(5);
console.log(area);

// Another example:
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

const total = bill([2300, 1200, 900], 0.13);
console.log(total)
