const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

console.log(names.sort());

const numbers = [5, 20, 15, 100, 47, 39];
// console.log(numbers.sort())

numbers.sort((a, b) => {
    if(a > b) {
        return -1;
    } else if(a < b) {
        return 1;
    } else {
        return 0;
    }
});

// In short:
numbers.sort((a,b) => b - a);

console.log(numbers);

const playerScores = [
    {player: 'mario', scores: 50}, 
    {player: 'yoshi', scores: 30}, 
    {player: 'mario', scores: 70}, 
    {player: 'crystal', scores: 60}
];

playerScores.sort((a, b) => {
    if(a.scores > b.scores) {
        return -1;
    } else if(a.scores < b.scores){
        return 1;
    } else {
        return 0;
    }
});

console.log(playerScores);