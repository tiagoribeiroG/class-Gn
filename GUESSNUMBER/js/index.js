const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attmpt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attmptsNumber: 0,
    numberDrawn: function randomNumber() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    attmpt.innerHTML = 'Tentava: ' + value
};


function handleSubmit(e) {
    e.preventDefaltu();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum valor!')
        return;
    };

    updateAttempt(attmpt, ++Guess.attmptsNumber);

    if(numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabens, você acertou!';
        result.style.transition = '0.4s';
        result.style.background = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
        
    } else if(numberDrawn > kick) {
        status.innerHTML = '0 numero e maior!'
        status.style.color = '#de4251';
        clear();
    } else if(numberDrawn < kick) {
        status.innerHTML = '0 numero e menor!'
        status.style.color = '#de4251';
        clear();

    }    
    
};

function playAgain() {
    document.getElementById('btmRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);

};

function clear() {
    document.getElementById('kick').value = '';
};

