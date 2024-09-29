function back(){
    location.href='index.html';
}
let totalClick = 0;
const clickCount = localStorage.getItem('clickCount');
totalClick +=clickCount;

const finalTime = localStorage.getItem('finalTime');
console.log(clickCount);

const totalPlays = document.querySelector('#totalPlays');

totalPlays.innerHTML = `Total Plays: ${totalClick}`

const bestTime = document.querySelector('#fastGuess');
bestTime.innerHTML = `Best Guess: ${finalTime} second` 



