const title = document.querySelector('h1');
title.setAttribute('style', 'margin: 50px') // Overwrites the current style

// This adds to current style:
title.style.color = "maroon";
title.style.margin = "40px";
title.style.fontSize = '40px'
// Use '' empty string to reset any property

console.log(title.style);
