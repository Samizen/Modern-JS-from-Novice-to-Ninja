const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Form Validation:
    const usernameRegex = /^[a-zA-z0-9]{6,12}$/;
    const username = form.username.value;
    console.log('Submit Activated!')
    
    if(usernameRegex.test(username)) {
        // Where to feedback - above the textbox in a div in HTML 
        feedback.textContent = 'Valid Username'
    } else {
        feedback.textContent = 'Invalid Username. Only numbers and alphabets between 6 to 12 characters'
    }
});