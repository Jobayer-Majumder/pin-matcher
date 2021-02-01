

function getPin() {
    const randomGenerate = Math.random()*10000 + '';
    const pinGenerate = randomGenerate.split('.')[0];
    const input = document.getElementById('pin-input');
    input.value = pinGenerate;
}

function getVerifyPin(){
    const input = document.getElementById('pin-input').value;
    const displayDigit = document.getElementById('display-digit').value;

    if(input === displayDigit){
        const correct = document.getElementById('correct');
        correct.style.display = 'block'
    }
    else{
        const inCorrect = document.getElementById('incorrect');
        inCorrect.style.display = 'block'
    }
}

const calcBody = document.getElementById('calc-body');
calcBody.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        const displayDigit = document.getElementById('display-digit');
        displayDigit.value = '';
    }
    else {
        const displayDigit = document.getElementById('display-digit');
        displayDigit.value = displayDigit.value + digit;
    }
})

