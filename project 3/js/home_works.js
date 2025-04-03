const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@+[0-9a-z.]+\.com$/

function validateGmail() {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
        gmailInput.value = ''
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

gmailButton.onclick = validateGmail

gmailInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        validateGmail()
    }
})


const child_block = document.querySelector('.child_block')

let posX = 0
let posY = 0
let direction = 'right'

const getRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    return randomColor
}

const moveBlock = () => {

    if (direction === 'right') {
        posX++
        if (posX >= 450) direction = 'down'
    }

    child_block.style.left = `${posX}px`
    child_block.style.top = `${posY}px`
    requestAnimationFrame(moveBlock)
}

moveBlock()



