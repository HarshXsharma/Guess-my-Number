'use strict';
let score = 10;
let highscore = 0;

let randomNumber = Math.trunc( Math.random() * 20 ) + 1;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector( '.again' ).addEventListener
( 'click', function() {
    randomNumber = Math.trunc( Math.random() * 20 ) + 1;
    document.querySelector( 'body' ).style.backgroundColor = '#222';
    document.querySelector( '.number' ).style.width = '15rem';
    score = 10;
    document.querySelector( '.score' ).textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
} );

document.querySelector('.check').addEventListener
( 'click', function() {
    
    const guess = Number(document.querySelector('.guess').value);
    
    if( !guess )
        displayMessage('⚠️No Number!!');
    
    else if( guess === randomNumber )
    {
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.message').textContent = '🥳Correct Number!!';
        document.querySelector( 'body' ).style.backgroundColor = '#60b347';
        document.querySelector( '.number' ).style.width = '30rem';
        highscore = Math.max( score, highscore );
        document.querySelector( '.highscore' ).textContent = highscore;
    }
    else
    if( guess != randomNumber )
    {
        if( score > 1 )
        {
            displayMessage( guess > randomNumber ? '📈Too high' : '📉Too low');
            score--;
            document.querySelector( '.score' ).textContent = score;
        }
        else
        {
            displayMessage( '💔You lost the game' );
            document.querySelector( '.score' ).textContent = '0';
            score = 0;
        }
    }
} );
