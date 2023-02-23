const container = document.querySelector(".container");
const reset = document.querySelector(".reset-etch");
const radios = document.getElementsByName('color');

var currentColor = 'black';
var backgroundColor = 'white';
var randomColor = Math.floor(Math.random()*16777215).toString(16);

function getRandomColor(){
    return '#' + (Math.floor(Math.random()*16777215).toString(16));
}

// Currently creating a static 256 amount based on TheOdinProject requirements. (could make it better by doing 16, then starting a new div)
for(var i = 0; i < 256; i++){
    var divs = document.createElement('div');
    divs.classList.add('sub');
    container.appendChild(divs);
}

function resetBoxes(){
    etchBoxes.forEach(e => e.style.backgroundColor = backgroundColor);
}

console.log(radios);
const etchBoxes = document.querySelectorAll('.sub');

// Loop through the node list and listen for mouse over events.

reset.addEventListener('click', () => {
    etchBoxes.forEach(e => e.style.backgroundColor = '')
})

etchBoxes.forEach((e) => e.addEventListener('mouseover', (e) => {
    if(currentColor != 'black' && currentColor != 'white'){ currentColor = getRandomColor()};
    e.target.style.backgroundColor = currentColor;
})
 );
 for(radio in radios){
    radios[radio].onclick = function () {
        console.log(this.id);
        switch(this.id){

            case '_black':
                currentColor = 'black';
                backgroundColor = 'white';
                resetBoxes();
                break;
            case '_white':
                currentColor = 'white';
                backgroundColor = 'black';
                resetBoxes();
                break;
            case '_rgb':
                currentColor = getRandomColor();
                console.log(currentColor);
                backgroundColor = getRandomColor();
                resetBoxes();
                break;

        }
    }
 }

console.log(randomColor);





