const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredArray = scores.filter((item) => {
    return (item > 20);
})

console.log(filteredArray);

const users = [
    {name: 'shaun', premium: true}, 
    {name: 'yoshi', premium: false}, 
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
]; 

// Filtering out the premium users:
const premiumUsers = users.filter(user => user.premium );

console.log(premiumUsers)