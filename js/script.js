function getPin() {
    const pinDispaly = document.getElementById('pin-dispaly');
    const pinGenerate = Math.round(Math.random() * 10000);
    const fourDegitPin = pinGenerate + '';

    if (fourDegitPin.length == 4) {
        pinDispaly.value = pinGenerate;
    }
    else {
        return getPin();
    }
}


document.getElementById('pin-generate').addEventListener('click', function () {
    getPin();

});
document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const numberDispaly = document.getElementById('key-dispaly');

    const previousNumberDisplay = numberDispaly.value;

    const newNumberDispaly = previousNumberDisplay + number;



    if (isNaN(number)) {
        if (number == 'C') {
            numberDispaly.value = '';
        }
        else if (number == '<') {

            numberDispaly.value = numberDispaly.value.slice(0, -1);
        }
    }
    else {
        numberDispaly.value = newNumberDispaly;
    }

});

document.getElementById('submit').addEventListener('click', function () {
    const generatePinNumber = document.getElementById('pin-dispaly');
    const generatePinNumberValue = generatePinNumber.value;

    const dispalyNumber = document.getElementById('key-dispaly');
    const dispalyNumberValue = dispalyNumber.value;
    if (generatePinNumberValue == dispalyNumberValue) {
        document.getElementById('show').style.display = 'block';
        document.getElementById('hide').style.display = 'none';
    }
    else {
        document.getElementById('show').style.display = 'none';
        document.getElementById('hide').style.display = 'block';
    }
})


