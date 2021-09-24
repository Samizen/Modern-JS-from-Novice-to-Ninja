const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

// Live feedback:
form.username.addEventListener('keyup', e => {
    // e.preventDefault();
    const usernameRegex = /^[a-zA-z0-9]{6,12}$/;
    console.log(e.target.value, form.username.value);
    if(usernameRegex.test(form.username.value)){
        form.username.setAttribute('class', 'success');
        // feedback.textContent = 'Valid Username';
    } else {
        // feedback.textContent = 'Invalid Username. Only numbers and alphabets between 6 to 12 characters';        
        form.username.setAttribute('class', 'error');
    }
})