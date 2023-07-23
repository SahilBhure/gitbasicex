const theme = document.querySelector('.theme');
const button = document.querySelector('#submit');
const body = document.body;
const main = document.querySelector('.main');
const nav = document.querySelector('.navbar');

function hello() {
    let mail = document.querySelector('#mail').value;
    let pass = document.querySelector('#pass').value;
    console.log(`Your mail is ${mail} and Your Password is ${pass}`);
}

function dark(){
    body.classList.toggle('darkmode');
    main.classList.toggle('darkmodeinside');
    theme.classList.toggle('theme1');
    nav.classList.toggle('darknav')

    if (body.className === 'darkmode') {
        theme.textContent = 'Sea';
    }
    else{
        theme.textContent = 'Flame';

    }
}

button.addEventListener('click',hello);
theme.addEventListener('click',dark);