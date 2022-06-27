let arr = ['rock', 'paper', 'scissors'];
let player = prompt('Enter your choice');

function computerPlay() {
    //this will give index of the array
    let indexValue = Math.floor(Math.random() * arr.length);
    // this will give values of array acording to above index
    let finalValue = arr[indexValue];
    return finalValue;   
}

let result1 = computerPlay();
console.log('computer selection is : ' + result1);
// console.log('Rock')
function playerSelection() {
    if (player == 'rock' && result1 == 'scissors') {
        console.log('You win')
    } else if (player == 'rock' && result1 == 'paper') {
        console.log('You lose')
    } else if (player == 'rock' && result1 == 'rock'){
        console.log('Tie')
    } else if (player == 'paper' && result1 == 'rock') {
        console.log('You win');
    } else if (player == 'paper' && result1 == 'paper') {
        console.log('Tie'); 
    } else if (player == 'paper' && result1 == 'scissors') {
        console.log('You lose');
    } else if (player == 'scissors' && result1 == 'rock') {
        console.log('You lose');
    } else if (player == 'scissors' && result1 == 'paper') {
        console.log('you win');
    } else if (player == 'scissors' && result1 == 'scissors') {
        console.log('Tie');
    } else {
        console.log('Player Enter valid input');
    }
    return;
}

console.log('player selection is : ' + player);

playerSelection();


