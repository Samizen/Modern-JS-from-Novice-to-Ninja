const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const scoreDisplay = document.querySelector(".result");
const scoreText = scoreDisplay.querySelector('span');

console.log(scoreDisplay);
console.log(scoreText);

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q3.value];
    // Check answers:
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    })
    
    console.log(score);
    scoreDisplay.classList.remove('d-none');
    scrollTo(0, 0);

    let output = 0;
    const timer = setInterval(() => {
        scoreDisplay.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            console.log("Score reached");
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
})