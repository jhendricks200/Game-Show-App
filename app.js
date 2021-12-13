const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start =  document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;
let resetGame = 0;

//Array of phrases
const phrases =[
  'the city that never sleeps',
  'it is cold outside',
  'it is hot outside',
  'pump your brakes',
  'leave the gun take the cannoli'];
const ul = document.querySelector('#phrase ul');


start.addEventListener('click', e => {
overlay.style.display = 'none';
 });


//Get a random phrase from the array
function getRandomPhraseAsArray(arr) {
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)].split('');
  return randomPhrase;
};

const getRandomPhrase = getRandomPhraseAsArray(phrases);


const addPhraseToDisplay = arr => {
  for (let i = 0; i < arr.length; i++) {
  const li = document.createElement('li');
  li.textContent = arr[i];
  if (li.textContent == ' ') {
    li.className = 'space';
  } else {
    li.className = 'letter';

  }
    ul.appendChild(li);
    phrase.appendChild(ul);
  }
};

addPhraseToDisplay(getRandomPhrase);

const checkLetter = button => {
 const letter = document.querySelectorAll('.letter');
 let letterFound = null;
   for (let i = 0; i < letter.length; i++) {
   if (button.textContent === letter[i].textContent) {
      letter[i].classList.add('show');
      letter[i].style.transition = '1s ease-in';
      letterFound = true;
    }
  }
  return letterFound;
};


qwerty.addEventListener('click', (e) => {
  // let item = e.target;
if ( e.target.tagName === "BUTTON" ){
   const clickedLetter = e.target;
   clickedLetter.classList.add('chosen');
   clickedLetter.setAttribute('disabled', '');
   const match = checkLetter(clickedLetter);
   if (match === null) {
     missed++;
   const lives = document.querySelectorAll('.tries img');
   const lostLife = 5 - missed;
   lives[lostLife].src =  'images/lostHeart.png';
   }
   checkWin();
 }
});

  function checkWin() {
    let lettersTotal = document.querySelectorAll('.letter');
    let showTotal = document.querySelectorAll('.show');
    let message = document.querySelector('.title');

    if (lettersTotal.length === showTotal.length) {
      overlay.style.display = 'flex';
      overlay.className = 'win';
      message.textContent = 'You did great!';
      playGameAgain();
    }
    else if (missed >= 5) {
      overlay.style.display = 'flex';
      overlay.className = 'lose';
      message.textContent = 'Try again!';
      playGameAgain();
    }
  }

  // Reset game
function playGameAgain() {
  start.textContent = 'Play again?';

  // Reset count, clear last phrase, and activate keyboard
  missed = 0;
  ul.textContent = '';
  const priorGame = document.querySelectorAll('.chosen');

  for(let i = 0; i < priorGame.length; i++) {
    priorGame[i].classList.remove('chosen');
    priorGame[i].disabled = false;
  }

  const newPhrase = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(newPhrase);


  // Refill lives
  const hearts = document.querySelectorAll('.tries img');
  for(i = 0; i < hearts.length; i++) {
    hearts[i].src = 'images/liveHeart.png';
  }
}
