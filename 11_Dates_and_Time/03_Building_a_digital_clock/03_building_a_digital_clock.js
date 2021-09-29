const clock = document.querySelector('.clock');
console.log(clock);

const tick = () => {
    
    const now = new Date();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const seconds = now.getSeconds();

    const html = `<span>${hours}</span>
    <span> : ${minutes}</span>
    <span> : ${seconds}</span>
    `

    clock.innerHTML = html;
};

// Calling the tick method every second:
setInterval(tick, 1000);