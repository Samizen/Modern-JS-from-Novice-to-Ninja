const prices = [20, 30, 10, 25, 55, 80];

const priceWithDiscount = prices.map(price => {
    return (price - (price * 0.2));
});

console.log(priceWithDiscount);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

const changedPrice = products.map((product) => {
    if(product.price > 30){
        return {name: product.name, price: product.price/2};
    } else {
        return {name: product.name, price: product.price};
    }
})

console.log(changedPrice);