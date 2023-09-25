const player1 = document.getElementById('namePlayerOne')
const player2 = document.getElementById('namePlayerTwo')
const inputName = document.getElementById('name')
const btnConfirm = document.getElementById('confirm')
const btnRestart = document.getElementById('restart')
const btnStart = document.getElementById('start')
const namePlayerRound = document.getElementById('playerRound')
const btnPlayerRound = document.getElementById('buttonRound')

document.querySelectorAll('.disabledGame').forEach(function(ev) {
    ev.setAttribute('disabled', '')
})
// seção Nome dos jogadores
let players = []

btnConfirm.addEventListener('click', function() {

    players.push(inputName.value)
    player1.innerText = players[0]
    player2.innerText = players[1]

    if (player1.innerText == '' || player2.innerText == '') {
        alert('Preencha o nome dos jogadores!')
        location.reload()
    }

    if (player1.innerText == players[0] && player2.innerText == players[1]) {
        btnConfirm.classList.add('none')
        inputName.classList.add('none')
        btnStart.style.display = 'block'

    } else {
        inputName.value = ''
        inputName.setAttribute('placeholder', 'jogador 2')
        inputName.focus()
        player2.innerText = ''
    }
})

btnRestart.addEventListener('click', function() {
    location.reload()
})

btnStart.addEventListener('click', function() {
    document.querySelectorAll('.disabledGame').forEach(function(ev) {
        ev.removeAttribute('disabled')
    })
    btnStart.setAttribute('disabled', '')

    namePlayerRound.innerText = `Primeiro jogador: ${players[0]}`

    const btnRound = document.createElement('input')
    btnRound.setAttribute('type', 'button')
    btnRound.setAttribute('value', 'Próximo jogador:')
    btnRound.setAttribute('id', 'roundPlayer')
    btnPlayerRound.appendChild(btnRound)

    //Seção jogo da velha

    btnRound.addEventListener('click', function() {
        const row1col1 = document.getElementById('row1col1')
        const row1col2 = document.getElementById('row1col2')
        const row1col3 = document.getElementById('row1col3')
        const row2col1 = document.getElementById('row2col1')
        const row2col2 = document.getElementById('row2col2')
        const row2col3 = document.getElementById('row2col3')
        const row3col1 = document.getElementById('row3col1')
        const row3col2 = document.getElementById('row3col2')
        const row3col3 = document.getElementById('row3col3')

        //Possibilidades de X ganhar o jogo
        if (row1col1.value == 'X' && row1col2.value == 'X' && row1col3.value == 'X') {
            row1col1.classList.add('ganhador')
            row1col2.classList.add('ganhador')
            row1col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col1.value == 'X' && row2col1.value == 'X' && row3col1.value == 'X') {
            row1col1.classList.add('ganhador')
            row2col1.classList.add('ganhador')
            row3col1.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col1.value == 'X' && row2col2.value == 'X' && row3col3.value == 'X') {
            row1col1.classList.add('ganhador')
            row2col2.classList.add('ganhador')
            row3col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col2.value == 'X' && row2col2.value == 'X' && row3col2.value == 'X') {
            row1col2.classList.add('ganhador')
            row2col2.classList.add('ganhador')
            row3col2.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col3.value == 'X' && row2col2.value == 'X' && row3col1.value == 'X') {
            row1col3.classList.add('ganhador')
            row2col2.classList.add('ganhador')
            row3col1.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col3.value == 'X' && row2col3.value == 'X' && row3col3.value == 'X') {
            row1col3.classList.add('ganhador')
            row2col3.classList.add('ganhador')
            row3col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row2col1.value == 'X' && row2col2.value == 'X' && row2col3.value == 'X') {
            row2col1.classList.add('ganhador')
            row2col2.classList.add('ganhador')
            row2col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row3col1.value == 'X' && row3col2.value == 'X' && row3col3.value == 'X') {
            row3col1.classList.add('ganhador')
            row3col2.classList.add('ganhador')
            row3col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        }

        //Possibilidades de O ganhar o jogo
        if (row1col1.value == 'O' && row1col2.value == 'O' && row1col3.value == 'O') {
            row1col1.classList.add('ganhador')
            row1col2.classList.add('ganhador')
            row1col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col1.value == 'O' && row2col1.value == 'O' && row3col1.value == 'O') {
            row1col1.classList.add('ganhador')
            row2col1.classList.add('ganhador')
            row3col1.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col1.value == 'O' && row2col2.value == 'O' && row3col3.value == 'O') {
            row1col1.classList.add('ganhador')
            row2col2.classList.add('ganhador')
            row3col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col2.value == 'O' && row2col2.value == 'O' && row3col2.value == 'O') {
            row1col2.classList.add('ganhador')
            row2col2.classList.add('ganhador')
            row3col2.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col3.value == 'O' && row2col2.value == 'O' && row3col1.value == 'O') {
            row1col3.classList.add('ganhador')
            row2col2.classList.add('ganhador')
            row3col1.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row1col3.value == 'O' && row2col3.value == 'O' && row3col3.value == 'O') {
            row1col3.classList.add('ganhador')
            row2col3.classList.add('ganhador')
            row3col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row2col1.value == 'O' && row2col2.value == 'O' && row2col3.value == 'O') {
            row2col1.classList.add('ganhador')
            row2col2.classList.add('ganhador')
            row2col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        } else if (row3col1.value == 'O' && row3col2.value == 'O' && row3col3.value == 'O') {
            row3col1.classList.add('ganhador')
            row3col2.classList.add('ganhador')
            row3col3.classList.add('ganhador')
            document.querySelectorAll('.disabledGame').forEach(function(ev) {
                ev.setAttribute('disabled', '')
            })
            alert('Você ganhou')
        }

        // Escolhas de cada jogador
        if (row1col1.value == 'X') {
            row1col1.classList.add('optionX')
            row1col1.setAttribute('disabled', '')
        } else if (row1col1.value == 'O') {
            row1col1.classList.add('optionO')
            row1col1.setAttribute('disabled', '')
        }

        if (row1col2.value == 'X') {
            row1col2.classList.add('optionX')
            row1col2.setAttribute('disabled', '')
        } else if (row1col2.value == 'O') {
            row1col2.classList.add('optionO')
            row1col2.setAttribute('disabled', '')
        }

        if (row1col3.value == 'X') {
            row1col3.classList.add('optionX')
            row1col3.setAttribute('disabled', '')
        } else if (row1col3.value == 'O') {
            row1col3.classList.add('optionO')
            row1col3.setAttribute('disabled', '')
        }
        
        if (row2col1.value == 'X') {
            row2col1.classList.add('optionX')
            row2col1.setAttribute('disabled', '')
        } else if (row2col1.value == 'O') {
            row2col1.classList.add('optionO')
            row2col1.setAttribute('disabled', '')
        }

        if(row2col2.value == 'X') {
            row2col2.classList.add('optionX')
            row2col2.setAttribute('disabled', '')
        } else if (row2col2.value == 'O') {
            row2col2.classList.add('optionO')
            row2col2.setAttribute('disabled', '')
        }

        if (row2col3.value == 'X') {
            row2col3.classList.add('optionX')
            row2col3.setAttribute('disabled', '')
        } else if (row2col3.value == 'O') {
            row2col3.classList.add('optionO')
            row2col3.setAttribute('disabled', '')
        }

        if (row3col1.value == 'X') {
            row3col1.classList.add('optionX')
            row3col1.setAttribute('disabled', '')
        } else if (row3col1.value == 'O') {
            row3col1.classList.add('optionO')
            row3col1.setAttribute('disabled', '')
        }

        if (row3col2.value == 'X') {
            row3col2.classList.add('optionX')
            row3col2.setAttribute('disabled', '')
        } else if (row3col2.value == 'O') {
            row3col2.classList.add('optionO')
            row3col2.setAttribute('disabled', '')
        }

        if (row3col3.value == 'X') {
            row3col3.classList.add('optionX')
            row3col3.setAttribute('disabled', '')
        } else if (row3col3.value == 'O') {
            row3col3.classList.add('optionO')
            row3col3.setAttribute('disabled', '')
        }
    })
})