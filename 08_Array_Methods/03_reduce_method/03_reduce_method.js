const scores = [10, 20, 60, 40, 70, 90, 30];

// Scores over 30 
const result = scores.reduce((accumulator, current) => {
    if (current > 30) {
        accumulator++;
    }
    return accumulator;
}, 0) //accumulator starts off at 0

console.log(result);

const playerScores = [
    {player: 'mario', scores: 50}, 
    {player: 'yoshi', scores: 30}, 
    {player: 'mario', scores: 70}, 
    {player: 'crystal', scores: 60}
]

// Accumulate score by Mario:
const marioScore = playerScores.reduce((accumulator, current) => {
    if(current.player === 'mario'){
        accumulator += current.scores;
    }
    return accumulator;
}, 0);

console.log(marioScore);