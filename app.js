const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start =  document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
let missed = 0;
let resetGame = 0;




start.addEventListener('click', e => {
overlay.style.display = 'none';
 });

//Array of phrases
const phrases =[
  'The city that never sleeps',
  'It is cold outside',
  'It is hot outside',
  'Pump your brakes',
  'Leave the gun take the cannoli'];


//Get a random phrase from the array
const getRandomPhraseAsArray = (arr) => {
    const rand = Math.floor(Math.random()*arr.length);
    return arr[rand].split('');
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
 let matchingLetter = null;
 const letter = document.getElementById('letter');


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

const checkWin = () => {
   const letters = document.querySelectorAll('.letter');
   const show = document.querySelectorAll('.show')
    if(missed >= 5 && letters.length !== show.length){
       winLose('lose', 'Sorry, You lose', 'Try Again');
    }else if (missed < 5 && letters.length === show.length){
       winLose('win', 'Congratulations, You win', 'Play Again')
          }

  };
