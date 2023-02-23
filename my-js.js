const container = document.querySelector(".container");
console.log(container);


for(var i = 0; i < 246; i++){
    var divs = document.createElement('div');
    divs.classList.add('sub');
    container.appendChild(divs);
}
