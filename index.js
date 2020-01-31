window.addEventListener('load', init);

let time = 5;
let score = 0;
let isPlaying;

let wordInput = document.querySelector('#word-input');
let currentWord = document.querySelector('#current-word');
let scoreDisplay = document.querySelector('#score');
let timeDisplay = document.querySelector('#time');
let message = document.querySelector('#message');
let seconds = document.querySelector('#seconds');

let words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

//   initialize game

function init(){
    // keluarkan random words
    showWord(words);
    // Start matching word
    wordInput.addEventListener('input', startMatch)
    // countdown game
   setInterval(countdown, 1000)
    //check status game
    setInterval(checkGameStatus, 50)    
};


function startMatch(){
    if(matchWord()){
        isPlaying = true
        time = 6
        showWord(words)
        wordInput.value = ''
        score++
    }
    if (score === -1){
        scoreDisplay.innerHTML = 0

    } else {
        scoreDisplay.innerHTML = score
    }
};

function matchWord(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct!"
        return true
    } else {
        message.innerHTML = 'Typing...'
        return false
    }
}

function showWord(words){
    let randomIndex = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[randomIndex]
};

function countdown(){
    // make sure time not run out
    if(time > 0){
        time--
    } else if(time === 0){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
};

function checkGameStatus(){
    if(!isPlaying && time == 0){
        message.innerHTML = 'Game over!!!';
        score = -1;
    }
};