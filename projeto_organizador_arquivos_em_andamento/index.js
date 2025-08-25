const fs = require('node:fs')
const path = require('node:path')
const os = require('node:os')

const caminhoPastaOrganizadora = path.join(os.homedir(), 'desktop', 'Say_Watcher')
const caminhoPastaFinal = path.join(os.homedir(), 'Pictures', 'Say_Watcher')

const nome = path.basename
const extensao = path.extname

if(!fs.existsSync(caminhoPastaOrganizadora)) {
    fs.mkdirSync(caminhoPastaOrganizadora)
}

if(!fs.existsSync(caminhoPastaFinal)) {
    fs.mkdirSync(caminhoPastaFinal)
}

function mover_e_ValidarArquivos(arquivo) {
    if(fs.existsSync(`${caminhoPastaFinal}/${extensao(arquivo)}/${nome(arquivo)}`)) {
       return fs.renameSync(
            `${caminhoPastaOrganizadora}/${nome(arquivo)}`,
            `${caminhoPastaFinal}/${extensao(arquivo)}/${nome(arquivo).replace(extensao(arquivo), ` - copia${extensao(arquivo)}`)}`) 
    } else {
        return fs.renameSync(
            `${caminhoPastaOrganizadora}/${nome(arquivo)}`,
            `${caminhoPastaFinal}/${extensao(arquivo)}/${nome(arquivo)}`)
    }
}

const arqPastaOrganizadora = fs.readdirSync(caminhoPastaOrganizadora, 'utf-8')

arqPastaOrganizadora.forEach(arquivo => {
    if(!fs.existsSync(`${caminhoPastaFinal}/${extensao(arquivo)}`)) {
        fs.mkdirSync(`${caminhoPastaFinal}/${extensao(arquivo)}`)

        mover_e_ValidarArquivos(arquivo)

    } else {
        mover_e_ValidarArquivos(arquivo)
    }
})

// envolve todo o código em um único bloco
const commented = "/*\n" + nome + "\n*/";

const teste = fs.readFileSync('./LEIAME.txt', 'utf-8')
const testes = teste.match(/1..../g)
console.log(testes)

if(testes == '1-(x)') {
    console.log('Olá, Mundo!!!')
} else {
    console.log('Vamo que vamo!!!')
}