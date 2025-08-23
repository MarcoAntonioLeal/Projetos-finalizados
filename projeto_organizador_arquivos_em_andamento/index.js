const fs = require('node:fs')
const path = require('node:path')

const caminhoPastaOrganizadora = 'C:/Users/marc-/OneDrive/Desktop/Say_Watcher'
const caminhoPastaFinal = 'C:/Users/marc-/OneDrive/Imagens/pasta_final'

const arqPastaOrganizadora = fs.readdirSync(caminhoPastaOrganizadora, 'utf-8')

function moverArquivos(arquivo) {
    return fs.copyFileSync(
            `${caminhoPastaOrganizadora}/${path.basename(arquivo)}`,
            `${caminhoPastaFinal}/${path.extname(arquivo)}/${path.basename(arquivo)}`)
}

if(!fs.existsSync(caminhoPastaFinal)) {
    fs.mkdirSync(caminhoPastaFinal)
}

arqPastaOrganizadora.forEach(arquivo => {
    if(!fs.existsSync(`${caminhoPastaFinal}/${path.extname(arquivo)}`)) {
        fs.mkdirSync(`${caminhoPastaFinal}/${path.extname(arquivo)}`)

        moverArquivos(arquivo)

    } else {
        moverArquivos(arquivo)
    }
    fs.unlinkSync(`${caminhoPastaOrganizadora}/${path.basename(arquivo)}`)
})




/*if(!dirOrganizador.length == 0) {
   
} */


/*fs.watch('C:/Users/marc-/OneDrive/Desktop/Sayo', {persistent: true} ,(a, b) => {
    console.log(a, b)
})*/