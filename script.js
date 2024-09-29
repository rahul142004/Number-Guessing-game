const newButton = document.createElement('button');
newButton.innerText = 'Guess';
newButton.className = 'guess';
document.getElementById('guessButton').appendChild(newButton);

// Generating random value
function generateRandNum() {
    return Math.floor(Math.random() * 100) + 1;
}

let randNum = generateRandNum();
console.log(randNum);

const inputValue = document.querySelector('.value');
const buttonId = document.querySelector('.guess');
let count = 0;

export function getInputvalue() {
    let hint = '';
    const userValue = parseInt(inputValue.value);
    count++;
    localStorage.setItem('clickCount',count);
    let oddOrEven = count % 2 === 0 ? 'even' : 'odd';

    // Success or Not
    if (randNum === userValue) {
        hint = "You won, the number is";
        ifYes();
    } else {
        if (oddOrEven === 'odd') {
            hint = randNum % 2 === 0 ? "The number is even" : "The number is odd";
        } else {
            hint = userValue > randNum ? "Think about a lower value" : "Think about a higher value";
        }
        ifNot(hint);
    }
}

function ifNot(hint) {
    document.querySelector('.hint-display').innerText = `Hint: ${hint}`;
    document.querySelector('.value').classList.add('js-value');
    inputValue.value = ''; // Clear input field

    document.querySelector('.hint-display').classList.add('js-hint-display');

    setTimeout(() => {
        document.querySelector('.hint-display').classList.remove('js-hint-display'); // Correctly remove class
    }, 2000);
}

function ifYes() {
    document.querySelector('.hint-display').innerText = `You won! The number is ${randNum}`;
    document.querySelector('.final-value').innerText = `${randNum}`;
    document.querySelector('.hint-display').classList.add('js-hint-display');

    newButton.remove();

    const statButton = document.createElement('button');
    statButton.classList.add('guess');
    statButton.innerText = 'See Stats';

    document.getElementById('guessButton').appendChild(statButton);

    statButton.addEventListener("click", stats); // Pass the function reference
}
function stats() {
    location.href = 'stat.html'; // Redirect to stats page
}

buttonId.addEventListener("click", getInputvalue);
let i = 0;

setInterval(
    function countDown(){
        document.querySelector('.timer').innerHTML = i;
        i++;
    },1000);
 buttonId.addEventListener("click",() =>{
    const getFinalTime = i;
    localStorage.setItem('finalTime', getFinalTime);
 });


