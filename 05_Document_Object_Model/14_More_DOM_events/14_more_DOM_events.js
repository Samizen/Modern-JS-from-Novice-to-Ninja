// Copy
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('OI! Copyright Content')
})

// Mouse-move:
const box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
    // console.log(e);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    box.textContent = `X-Pos: ${e.offsetX}, Y-Pos: ${e.offsetY} `
})

// wheelEvent

document.addEventListener('wheel', e => {
    
})