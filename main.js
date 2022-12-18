const inputNumber = document.querySelector('#input-number')
const attemptsText = document.querySelector('#attempts')
const homeScreen = document.querySelector('.screen1')
const endScreen = document.querySelector('.screen2') 
const inputDisplay = document.querySelector('div .input')

let count = 1
let result = getRandomNumber()


function getRandomNumber() {
    min = 0
    max = 11
    let x = Math.floor(Math.random() * max)
    console.log(x)
    return x
    
}
 
function submit(event) {
    event.preventDefault()
    console.log(result)
    
    let number = inputNumber.value
    
        if (number == result){
        counter()
        showEnd()
        } else {
            count += 1 
            console.log(count, number)
            inputDisplay.classList.add('shake') 
            setTimeout(stopShake, 1000)
        }

}

function stopShake() {
    inputDisplay.classList.remove('shake')
}

function counter() {
    attemptsText.innerText = `em ${count} tentativas`
}

function showEnd() {
    homeScreen.classList.add('hide')
    endScreen.classList.remove('hide')
}

function reset() {
    homeScreen.classList.remove('hide')
    endScreen.classList.add('hide')
    inputNumber.value = ''
    count = 1
    result = getRandomNumber()
}




