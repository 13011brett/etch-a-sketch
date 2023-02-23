const container = document.querySelector(".container");
console.log(container);

// Currently creating a static 256 amount based on TheOdinProject requirements. (could make it better by doing 16, then starting a new div)
for(var i = 0; i < 256; i++){
    var divs = document.createElement('div');
    divs.classList.add('sub');
    container.appendChild(divs);
}

const etchBoxes = document.querySelectorAll('.sub');

// Loop through the node list and listen for mouse over events.
etchBoxes.forEach((e) => e.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
})
 );



