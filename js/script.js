const formButtons = document.querySelector('#formButtons')
const inputNumber = document.forms['formButtons']['numberField']
const sevenButton = document.forms['formButtons']['7button']
const eightButton = document.forms['formButtons']['8button']
const nineButton = document.forms['formButtons']['9button']
const fourButton = document.forms['formButtons']['4button']
const fiveButton = document.forms['formButtons']['5button']
const sixButton = document.forms['formButtons']['6button']
const oneButton = document.forms['formButtons']['1button']
const twoButton = document.forms['formButtons']['2button']
const threeButton = document.forms['formButtons']['3button']
const zeroButton = document.forms['formButtons']['0button']
const delButton = document.forms['formButtons']['delButton']
const plusButton = document.forms['formButtons']['plusButton']
const minusButton = document.forms['formButtons']['minusButton']
const dotButton = document.forms['formButtons']['dotButton']
const divButton = document.forms['formButtons']['divButton']
const mulButton = document.forms['formButtons']['mulButton']
const resetButton = document.forms['formButtons']['resetButton']
const resultButton = document.forms['formButtons']['resultButton']
const mainBackground = document.querySelector('#mainId')
const titleCalc = document.querySelector('#calcTitle')
const titleTheme = document.querySelector('#themeTitle')
const themeNumbers = document.querySelector('#themeNumbersId')
const themeSlider = document.forms['formButtons']['themeSlider']
const footerLink = document.querySelector('#footerLink')


function changeTheme() {
    if (themeSlider.value == 1) {
        mainBackground.classList.add('themeOneMain')
        delButton.classList.add('buttonDelOne')
        resetButton.classList.add('buttonResetOne')
        resultButton.classList.add('buttonResultOne')
        formButtons.classList.add('boxColorOne')
        inputNumber.classList.add('inputNumbersOne')
        titleCalc.classList.add('calcThemeOne')
        titleTheme.classList.add('themeColorOne')
        themeNumbers.classList.add('themeNumbersOne')
        themeSlider.classList.add('themeInputOne')
        plusButton.classList.add('buttonColorOne')
        minusButton.classList.add('buttonColorOne')
        dotButton.classList.add('buttonColorOne')
        divButton.classList.add('buttonColorOne')
        mulButton.classList.add('buttonColorOne')
        sevenButton.classList.add('buttonColorOne')
        eightButton.classList.add('buttonColorOne')
        nineButton.classList.add('buttonColorOne')
        fourButton.classList.add('buttonColorOne')
        fiveButton.classList.add('buttonColorOne')
        sixButton.classList.add('buttonColorOne')
        oneButton.classList.add('buttonColorOne')
        twoButton.classList.add('buttonColorOne')
        threeButton.classList.add('buttonColorOne')
        zeroButton.classList.add('buttonColorOne')
        footerLink.classList.add('themeOneFooter')

        /***************/

        mainBackground.classList.remove('themeTwoMain', 'themeThreeMain')
        delButton.classList.remove('buttonDelTwo', 'buttonDelThree')
        resetButton.classList.remove('buttonResetTwo', 'buttonResetThree')
        resultButton.classList.remove('buttonResultTwo', 'buttonResultThree')
        formButtons.classList.remove('boxColorTwo', 'boxColorThree')
        inputNumber.classList.remove('inputNumbersTwo', 'inputNumbersThree')
        titleCalc.classList.remove('calcThemeTwo', 'calcThemeThree')
        titleTheme.classList.remove('themeColorTwo', 'themeColorThree')
        themeNumbers.classList.remove('themeNumbersTwo', 'themeNumbersThree')
        themeSlider.classList.remove('themeInputTwo', 'themeInputThree')
        plusButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        minusButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        dotButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        divButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        mulButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        sevenButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        eightButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        nineButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        fourButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        fiveButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        sixButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        oneButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        twoButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        threeButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        zeroButton.classList.remove('buttonColorTwo', 'buttonColorThree')
        footerLink.classList.remove('themeTwoFooter', 'themeThreeFooter')


        themeSlider.value = 1
    } else if (themeSlider.value == 2) {
        mainBackground.classList.add('themeTwoMain')
        delButton.classList.add('buttonDelTwo')
        resetButton.classList.add('buttonResetTwo')
        resultButton.classList.add('buttonResultTwo')
        formButtons.classList.add('boxColorTwo')
        inputNumber.classList.add('inputNumbersTwo')
        titleCalc.classList.add('calcThemeTwo')
        titleTheme.classList.add('themeColorTwo')
        themeNumbers.classList.add('themeNumbersTwo')
        themeSlider.classList.add('themeInputTwo')
        plusButton.classList.add('buttonColorTwo')
        minusButton.classList.add('buttonColorTwo')
        dotButton.classList.add('buttonColorTwo')
        divButton.classList.add('buttonColorTwo')
        mulButton.classList.add('buttonColorTwo')
        sevenButton.classList.add('buttonColorTwo')
        eightButton.classList.add('buttonColorTwo')
        nineButton.classList.add('buttonColorTwo')
        fourButton.classList.add('buttonColorTwo')
        fiveButton.classList.add('buttonColorTwo')
        sixButton.classList.add('buttonColorTwo')
        oneButton.classList.add('buttonColorTwo')
        twoButton.classList.add('buttonColorTwo')
        threeButton.classList.add('buttonColorTwo')
        zeroButton.classList.add('buttonColorTwo')
        footerLink.classList.add('themeTwoFooter')

        /***************/

        mainBackground.classList.remove('themeOneMain', 'themeThreeMain')
        delButton.classList.remove('buttonDelOne', 'buttonDelThree')
        resetButton.classList.remove('buttonResetOne', 'buttonResetThree')
        resultButton.classList.remove('buttonResultOne', 'buttonResultThree')
        formButtons.classList.remove('boxColorOne', 'boxColorThree')
        inputNumber.classList.remove('inputNumbersOne', 'inputNumbersThree')
        titleCalc.classList.remove('calcThemeOne', 'calcThemeThree')
        titleTheme.classList.remove('themeColorOne', 'themeColorThree')
        themeNumbers.classList.remove('themeNumbersOne', 'themeNumbersThree')
        themeSlider.classList.remove('themeInputOne', 'themeInputThree')
        plusButton.classList.remove('buttonColorOne', 'buttonColorThree')
        minusButton.classList.remove('buttonColorOne', 'buttonColorThree')
        dotButton.classList.remove('buttonColorOne', 'buttonColorThree')
        divButton.classList.remove('buttonColorOne', 'buttonColorThree')
        mulButton.classList.remove('buttonColorOne', 'buttonColorThree')
        sevenButton.classList.remove('buttonColorOne', 'buttonColorThree')
        eightButton.classList.remove('buttonColorOne', 'buttonColorThree')
        nineButton.classList.remove('buttonColorOne', 'buttonColorThree')
        fourButton.classList.remove('buttonColorOne', 'buttonColorThree')
        fiveButton.classList.remove('buttonColorOne', 'buttonColorThree')
        sixButton.classList.remove('buttonColorOne', 'buttonColorThree')
        oneButton.classList.remove('buttonColorOne', 'buttonColorThree')
        twoButton.classList.remove('buttonColorOne', 'buttonColorThree')
        threeButton.classList.remove('buttonColorOne', 'buttonColorThree')
        zeroButton.classList.remove('buttonColorOne', 'buttonColorThree')
        footerLink.classList.remove('themeOneFooter', 'themeThreeFooter')

        themeSlider.value = 2
    } else if (themeSlider.value == 3) {
        mainBackground.classList.add('themeThreeMain')
        delButton.classList.add('buttonDelThree')
        resetButton.classList.add('buttonResetThree')
        resultButton.classList.add('buttonResultThree')
        formButtons.classList.add('boxColorThree')
        inputNumber.classList.add('inputNumbersThree')
        titleCalc.classList.add('calcThemeThree')
        titleTheme.classList.add('themeColorThree')
        themeNumbers.classList.add('themeNumbersThree')
        themeSlider.classList.add('themeInputThree')
        plusButton.classList.add('buttonColorThree')
        minusButton.classList.add('buttonColorThree')
        dotButton.classList.add('buttonColorThree')
        divButton.classList.add('buttonColorThree')
        mulButton.classList.add('buttonColorThree')
        sevenButton.classList.add('buttonColorThree')
        eightButton.classList.add('buttonColorThree')
        nineButton.classList.add('buttonColorThree')
        fourButton.classList.add('buttonColorThree')
        fiveButton.classList.add('buttonColorThree')
        sixButton.classList.add('buttonColorThree')
        oneButton.classList.add('buttonColorThree')
        twoButton.classList.add('buttonColorThree')
        threeButton.classList.add('buttonColorThree')
        zeroButton.classList.add('buttonColorThree')   
        footerLink.classList.add('themeThreeFooter')

        /***************/

        mainBackground.classList.remove('themeOneMain', 'themeTwoMain')
        delButton.classList.remove('buttonDelOne', 'buttonDelTwo')
        resetButton.classList.remove('buttonResetOne', 'buttonResetTwo')
        resultButton.classList.remove('buttonResultOne', 'buttonResultTwo')
        formButtons.classList.remove('boxColorOne', 'boxColorTwo')
        inputNumber.classList.remove('inputNumbersOne', 'inputNumbersTwo')
        titleCalc.classList.remove('calcThemeOne', 'calcThemeTwo')
        titleTheme.classList.remove('themeColorOne', 'themeColorTwo')
        themeNumbers.classList.remove('themeNumbersOne', 'themeNumbersTwo')
        themeSlider.classList.remove('themeInputOne', 'themeInputTwo')
        plusButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        minusButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        dotButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        divButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        mulButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        sevenButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        eightButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        nineButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        fourButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        fiveButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        sixButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        oneButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        twoButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        threeButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        zeroButton.classList.remove('buttonColorOne', 'buttonColorTwo')
        footerLink.classList.remove('themeOneFooter', 'themeTwoFooter')

        themeSlider.value = 3
    }

    localStorage.setItem('valorDoSlider', themeSlider.value)
}

let teste = ''
let apertado = false
let apertadoResult = false
let testeMinus = true
let testePlus = true
let testeMulti = true
let testeDiv = true
let valorGuardado = 0
let operatorPressed = 'plus'

function mudou() {
    teste = inputNumber.value
}

function zeroPressed() {
    teste += 0
    inputNumber.value = teste
}

function onePressed() {
    teste += 1
    inputNumber.value = teste
}

function twoPressed() {
    teste += 2
    inputNumber.value = teste
}

function threePressed() {
    teste += 3
    inputNumber.value = teste
}

function fourPressed() {
    teste += 4
    inputNumber.value = teste
}

function fivePressed() {
    teste += 5
    inputNumber.value = teste
}

function sixPressed() {
    teste += 6
    inputNumber.value = teste
}

function sevenPressed() {
    teste += 7
    inputNumber.value = teste
}

function eightPressed() {
    teste += 8
    inputNumber.value = teste
}

function ninePressed() {
    teste += 9
    inputNumber.value = teste
}

function dotPressed() {
    if (inputNumber.value && apertado == false) {
        teste += '.'    
        inputNumber.value = teste
        apertado = true
    }
}

function delPressed() {
    inputNumber.value = ''
    teste = ''
    apertado = false
}

function plusPressed() {
    if (teste) {
        if (apertadoResult == false && testePlus == true && operatorPressed == 'plus') {
            valorGuardado = valorGuardado + parseFloat(teste)
        } else if (apertadoResult == false && operatorPressed == 'minus') {
            valorGuardado -= parseFloat(inputNumber.value)
            inputNumber.value = valorGuardado
        } else if (apertadoResult == false && operatorPressed == 'multi') {
            valorGuardado = valorGuardado * parseFloat(inputNumber.value)
            inputNumber.value = valorGuardado
        } else if (apertadoResult == false && operatorPressed == 'div') {
            valorGuardado = valorGuardado / parseFloat(teste)
            inputNumber.value = valorGuardado
        }
        teste = ''
        inputNumber.value = valorGuardado
        operatorPressed = 'plus'
        apertadoResult = false
        testePlus = true
        testeMinus = true
        testeMulti = true
        testeDiv = true
        apertado = false


       
    }
}

function minusPressed() {
    if (teste) {
        if (apertadoResult == false && testeMinus == false) {
            valorGuardado = valorGuardado - parseFloat(teste)
            teste = ''
        } else if (apertadoResult == false && operatorPressed == 'plus') {
            valorGuardado += parseFloat(inputNumber.value)
            inputNumber.value = valorGuardado
        } else if (apertadoResult == false && operatorPressed == 'multi') {
            valorGuardado = valorGuardado * parseFloat(inputNumber.value)
            inputNumber.value = valorGuardado
        } else if (apertadoResult == false && operatorPressed == 'div') {
            valorGuardado = valorGuardado / parseFloat(teste)
            inputNumber.value = valorGuardado
        }
        teste = ''
        operatorPressed = 'minus'
        apertadoResult = false
        testeMinus = false
        testePlus = false
        testeMulti = true
        testeDiv = true
        apertado = false
    } 
}

function multiPressed() {
    if (teste) {
        if (valorGuardado && apertadoResult == false && testeMulti == false) {
            valorGuardado = parseFloat(teste) * valorGuardado
            teste = ''
        } else if (apertadoResult == false && operatorPressed == 'plus') {
            valorGuardado += parseFloat(inputNumber.value)
            inputNumber.value = valorGuardado
        } else if (apertadoResult == false && operatorPressed == 'minus') {
            valorGuardado -= parseFloat(inputNumber.value)
            inputNumber.value = valorGuardado
        } else if (apertadoResult == false && operatorPressed == 'div') {
            valorGuardado = valorGuardado / parseFloat(teste)
            inputNumber.value = valorGuardado
        }
        teste = ''
        operatorPressed = 'multi'
        apertadoResult = false
        testeMinus = true
        testePlus = false
        testeMulti = false
        testeDiv = true
        apertado = false
    }
}

function divPressed() {
    if (teste) {
        if (valorGuardado && apertadoResult == false && testeDiv == false) {
            valorGuardado = valorGuardado / parseFloat(teste)
            teste = ''
        } else if (apertadoResult == false && operatorPressed == 'plus') {
            valorGuardado = parseFloat(teste) + valorGuardado
            inputNumber.value = valorGuardado
        } else if (apertadoResult == false && operatorPressed == 'minus') {
            valorGuardado -= parseFloat(teste)
            inputNumber.value = valorGuardado
        } else if (apertadoResult == false && operatorPressed == 'multi') {
            valorGuardado = valorGuardado * parseFloat(teste)
            inputNumber.value = valorGuardado
        }
        teste = ''
        inputNumber.value = valorGuardado
        operatorPressed = 'div'
        apertadoResult = false
        testeMinus = true
        testePlus = false
        testeMulti = false
        testeDiv = false
        apertado = false
    }
}

function resultPressed() {
    if (operatorPressed == 'plus' && teste){
        inputNumber.value = valorGuardado + parseFloat(teste)
        teste = inputNumber.value
        valorGuardado = parseFloat(teste)
    }

    if (operatorPressed == 'minus' && teste) {
        inputNumber.value = valorGuardado - parseFloat(teste)
        valorGuardado = parseFloat(inputNumber.value)
    }

    if (operatorPressed == 'multi' && teste) {
        inputNumber.value = valorGuardado * parseFloat(teste)
        teste = inputNumber.value
        valorGuardado = parseFloat(inputNumber.value)
    }

    if (operatorPressed == 'div' && teste) {
        inputNumber.value = valorGuardado / parseFloat(teste)
        teste = inputNumber.value
        valorGuardado = parseFloat(inputNumber.value)
    }

    apertadoResult = true
    testeMinus = true
    testePlus = false
    testeMulti = true
    testeDiv = true
    apertado = false
}

function resetPressed() {
    teste = ''
    apertado = false
    apertadoResult = false
    testeMinus = true
    testePlus = true
    testeMulti = true
    testeDiv = true
    valorGuardado = 0
    operatorPressed = 'plus'
    inputNumber.value = ''
}

function executeCalc(event) {
    event.preventDefault()
}

dotButton.addEventListener('click', dotPressed)
delButton.addEventListener('click', delPressed)
resetButton.addEventListener('click', resetPressed)
plusButton.addEventListener('click', plusPressed)
minusButton.addEventListener('click', minusPressed)
mulButton.addEventListener('click', multiPressed)
divButton.addEventListener('click', divPressed)
resultButton.addEventListener('click', resultPressed)
zeroButton.addEventListener('click', zeroPressed)
oneButton.addEventListener('click', onePressed)
twoButton.addEventListener('click', twoPressed)
threeButton.addEventListener('click', threePressed)
fourButton.addEventListener('click', fourPressed)
fiveButton.addEventListener('click', fivePressed)
sixButton.addEventListener('click', sixPressed)
sevenButton.addEventListener('click', sevenPressed)
eightButton.addEventListener('click', eightPressed)
nineButton.addEventListener('click', ninePressed)
inputNumber.addEventListener('blur', mudou)
formButtons.addEventListener('submit', executeCalc)
themeSlider.addEventListener('change', changeTheme)

let valorSalvoSlider = localStorage.getItem('valorDoSlider')
themeSlider.value = valorSalvoSlider

changeTheme()
