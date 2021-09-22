// First select multiple paragrephs in the page
const paras = document.querySelectorAll('p');

console.log(paras);

paras.forEach(para => {
    if (para.textContent.includes('success')){
        para.classList.add('success');
    }
    else if (para.textContent.includes('error')){
        para.classList.add('error');
    } 
})

// textContent can and should be used instead of innerText