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


}