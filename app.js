let select = document.querySelector(".select")
let wordElement = document.querySelector(".words")
let wordInput = document.querySelector(".input")
let scoreElement = document.querySelector(".score > span")
let timeElement = document.querySelector(".time > span")
let restartBtn = document.querySelector(".restart-btn")
let modal = document.querySelector(".modal")

const modalScore = document.querySelector(".modal-score > span")
const overlay = document.querySelector(".overlay")

let a;
let b = 0
let audio = new Audio('error.mp3')
let audio2 = new Audio('break.mp3')
let q = 'Oson'
let x = 15;



// Time func
setInterval(() => {
    x--
    if (x >= 0) {
        timeElement.textContent = `00:${x}`
        if (x < 10) {
            timeElement.textContent = `00:0${x}`
        }
        if (x == 0) {
            overlay.style.display = 'flex'
            modalScore.textContent = scoreElement.textContent
            overlay.addEventListener('click', () => {
                restartBtn.style.background = 'red'
                modal.classList.add('anim1')
                setTimeout(() => {
                    modal.classList.remove('anim1')
                    restartBtn.style.background = ''
                    audio2.play()
                }, 1000)
            })
        }
    }
}, 1000)
// Time func

// Radnom word
function wordFunc() {
    a = words[Math.trunc(Math.random() * words.length)]
    wordElement.textContent = a
}
wordFunc()
// Radnom word
function test() {
    q = select.value
    wordFunc()
    wordInput.value = ''
    x = 16
}
// Wordinput click
wordInput.addEventListener('input', () => {

    if (a.length == wordInput.value.length && a != wordInput.value) {
        wordInput.value = ''
        wordInput.style.borderColor = 'red'
        audio.play()
        wordInput.classList.add('anim1')
        setTimeout(() => {
            wordInput.classList.remove('anim1')
            wordInput.style.borderColor = ''

        }, 1000)

    } else if (a == wordInput.value) {
        b++
        scoreElement.textContent = b
        wordInput.value = ''
        wordFunc()

        if (q == "Oson") {
            x += 5

        } else if (q == "O'rta") {
            x += 4

        } else if (q == "Qiyin") {
            x += 3
        }
        wordInput.style.borderColor = ''
    }
})
// Wordinput click





