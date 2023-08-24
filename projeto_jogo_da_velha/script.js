const player1 = document.getElementById('namePlayerOne')
const player2 = document.getElementById('namePlayerTwo')
const inputName = document.getElementById('name')
const btnConfirm = document.getElementById('confirm')
let players = []

// name of players for click mouse
document.getElementById('confirm').addEventListener('click', function() {

    players.push(inputName.value)
    player1.innerText = players[0]
    player2.innerText = players[1]

    if(player1.innerText == '' || player2.innerText == '' ) {
        alert('Preencha o nome dos jogadores!')
    }

    if (player1.innerText == players[0] && player2.innerText == players[1]) {
        inputName.value = ''
        inputName.setAttribute('placeholder', '')
        inputName.disabled = 'true'
        btnConfirm.disabled = 'true'
        inputName.classList.add('disabled')
    } else {
        inputName.value = ''
        inputName.setAttribute('placeholder', 'jogador 2')
        inputName.focus()
        player2.innerText = ''
    }
})

