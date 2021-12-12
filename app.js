const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start =  document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;
let resetGame = 0;

//Array of phrases
const phrases =[
  'The city that never sleeps',
  'It is cold outside',
  'It is hot outside',
  'Pump your brakes',
  'Leave the gun take the cannoli'];
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
 const letter = document.getElementById('letter');
 let matchingLetter = null;


  for (let i = 0; i < letter; i++) {
   if (button === letter[i].textContent) {
      letters[i].className = 'show';
      matchingLetter = button;
    }
  }
  return matchingLetter;
};


qwerty.addEventListener('click', (e) => {
  let item = e.target;
    if ( e.target.tagName === "BUTTON" ){
        item.className = "chosen";
        item.disabled = true;
    }
    let hearts = Array.from(document.querySelectorAll('.tries img'));
    if (checkLetter(item) == null && e.target.tagName === "BUTTON"){
        hearts[missed].src="images/lostHeart.png";
        missed++;
      }
    checkWin();
  });

  function checkWin() {
    let lettersTotal = document.querySelectorAll('.letter');
    let showTotal = document.querySelectorAll('.show');
    let message = document.querySelector('.title');

    if (lettersTotal.length === showTotal.length) {
      overlay.style.display = 'flex';
      overlay.className = 'win';
      message.textContent = 'You won!';
      playGameAgain();
    }
    else if (missed >= 5) {
      overlay.style.display = 'flex';
      overlay.className = 'lose';
      message.textContent = 'Sorry, you lost!';
      playGameAgain();
    }
  }
