// Player 1

let randomNumber = Math.ceil(Math.random() * 6);

console.log(randomNumber);
let randomDiceImage = 'dice' + randomNumber + '.jpg';

let randomImageSource = 'Assets/' + randomDiceImage;

let image = document.querySelectorAll('img')[0]
image.setAttribute('src', randomImageSource)

// Player 2

let randomNumber1 = Math.ceil(Math.random() * 6);
console.log(randomNumber1);

let randomDiceImage1 = 'dice' + randomNumber1 + '.jpg';

let randomImageSource1 = 'Assets/' + randomDiceImage1;

let image1  = document.querySelectorAll('img')[1];
image1.setAttribute('src', randomImageSource1);

if(randomNumber > randomNumber1){
    document.querySelector('h3').innerText = 'Player 1 Wins !!!'
}else if( randomNumber1 > randomNumber){
    document.querySelector('h3').innerText = 'Player 2 Wins !!!'

}else {
    document.querySelector('h3').innerText = 'It is a draw !!!'
}

let Refresh = document.querySelector('.refresh');
// Refresh.setAttribute('href', 'http://127.0.0.1:5500/index.html')

function refresh(){
    return window.location.reload();
}

Refresh.addEventListener('click', refresh)