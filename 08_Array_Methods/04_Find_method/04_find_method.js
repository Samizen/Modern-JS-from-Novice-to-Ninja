const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// Elements over 50:
const firstHighScore = scores.find((score) => {
    return score > 50;
});

console.log(firstHighScore);