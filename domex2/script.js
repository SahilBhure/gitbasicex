var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var color3 = document.querySelector('.color3');
var body = document.getElementById('Gradiant');

function colorChange(){
    body.style.background = 
    "linear-gradient(to right," 
    +color1.value
    +","
    +color2.value
    +","
    +color3.value
    ")";

    css.textContent = body.style.background + ";";

}

color1.addEventListener('input',colorChange);
color2.addEventListener('input',colorChange);
color3.addEventListener('input',colorChange);

