const randomNumber= parseInt((Math.random()*100)+1)
console.log(parseInt(Math.random()*100));

const submit= document.querySelector('#subt')
const userInput= document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let previousNumber=[];
let numGuesses=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()

        const guess= parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess);
    })

}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess <1 && guess > 100){
        alert('Please enter a number between 1 to 100')
    }else{
        previousNumber.push(guess)
        if(numGuesses===11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is tooo low`)
    }else if(guess>randomNumber){
        displayMessage(`Number is too high`)
    }

}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess},`
    numGuesses++;
    remaining.innerHTML=`${11-numGuesses}`
}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame"> Start new Game</h2>'
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

function newGame(){

}






