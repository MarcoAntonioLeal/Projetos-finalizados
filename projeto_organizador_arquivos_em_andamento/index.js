const fs = require('node:fs')
const path = require('node:path')

const nome = path.basename
const extensao = path.extname

const caminhoPastaOrganizadora = 'C:/Users/marc-/OneDrive/Desktop/Say_Watcher'
const caminhoPastaFinal = 'C:/Users/marc-/OneDrive/Imagens/pasta_final'

const arqPastaOrganizadora = fs.readdirSync(caminhoPastaOrganizadora, 'utf-8')

function mover_e_ValidarArquivos(arquivo) {
    if(fs.existsSync(`${caminhoPastaFinal}/${extensao(arquivo)}/${nome(arquivo)}`)) {
       return fs.renameSync(
            `${caminhoPastaOrganizadora}/${nome(arquivo)}`,
            `${caminhoPastaFinal}/${extensao(arquivo)}/${nome(arquivo).replace(extensao)}`) 
    } else {
        return fs.renameSync(
            `${caminhoPastaOrganizadora}/${nome(arquivo)}`,
            `${caminhoPastaFinal}/${extensao(arquivo)}/${nome(arquivo)}`)
    }
    
    /*return fs.renameSync(
            `${caminhoPastaOrganizadora}/${nome(arquivo)}`,
            `${caminhoPastaFinal}/${extensao(arquivo)}/${nome(arquivo)}`)*/

}

if(!fs.existsSync(caminhoPastaFinal)) {
    fs.mkdirSync(caminhoPastaFinal)
}

arqPastaOrganizadora.forEach(arquivo => {
    if(!fs.existsSync(`${caminhoPastaFinal}/${extensao(arquivo)}`)) {
        fs.mkdirSync(`${caminhoPastaFinal}/${extensao(arquivo)}`)

        mover_e_ValidarArquivos(arquivo)

    } else {
        mover_e_ValidarArquivos(arquivo)
    }
})




/*if(!dirOrganizador.length == 0) {
   
} */


/*fs.watch('C:/Users/marc-/OneDrive/Desktop/Sayo', {persistent: true} ,(a, b) => {
    console.log(a, b)
})*/