const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

// Filter out any product that isn't 20 or less, then map it to product name with sale price
const result = products.filter(product => {
    if(product.price > 20) {
        return product
    }
});

const mappedResult = result.map(product => {
    return {name:product.name, price: product.price-0.2*product.price};
})

console.log(mappedResult);

// Method chaining:
const promos  = products
    .filter(product => {
    if(product.price > 20) {
        return product
    }
    })
    .map(product => {
        return {name:product.name, price: product.price-0.2*product.price};
    });

console.log(promos);

// Can be used for any methods

    