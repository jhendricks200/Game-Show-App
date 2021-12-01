const qwerty = getElementById('qwerty');
const phrase = getElementById('phrase');
const start =  document.querySelector(.btn__reset);
const overlay = document.getElementById('overlay');
let missed = 0;
let resetGame = 0;

const title = document.querySelector('.title');

start.addEventListner('click', () => {
   if (resetGame === 1) {
     reset();
   } else {
      overlay.style.display = 'none';
   }
   });

//Array of phrases
const phrases =[
  'The city that never sleeps',
  'It is cold outside',
  'It is hot outside',
  'Pump your brakes',
  'Leave the gun take the cannoli'];


//Get a random phrase from the array
const getRandomPhraseAsArray = arr => {
  let randomNumber = Math.floor(Math.random() * phrases.length )
  return phrases[randomNumber];
};

const getRandomPhrase = getRandomPhraseAsArray(phrases);
const randomPhrase = randomPhrase.split('');

const addPhraseToDisplay = arr => {
  for (let i = 0; i < getRandomPhrase.length; i++) {
  const li = document.createElement('li');
  li.textContent = randomPhrase[i];
  if (li.textContent == '') {
    li.className = 'space';
  } else {
    li.className = 'letter';
    phraseLetterCount ++;
  }
    ul.appendChild(li);
    phrase.appendChild(ul);
  }
};

const checkLetter = button => {
  const letter = document.getElementById('letter');
  let matchingLetter = null;

  for (let i = 0; i < letters.length; i++) {
   if (button === letters[i].textContent) {
      letters[i].className = 'show';
      matchingLetter = button;
    }
  }
  return matchingLetter;
};

qwerty.addEventListner('click', (e) => {
  const button = event.target.textContent;
});
