const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')

const dirDocuments = 'Documents'
const dirPictures = 'Pictures'
const dirDownloads = 'Downloads'
const dirMusic = 'Music'
const dirVideos = 'Videos'

const caminhoPastaOrganizadora = path.join(os.homedir(), 'desktop', 'Say_Watcher')
const caminhoPastaFinal = path.join(os.homedir(), dirPictures, 'Meus_arquivos')

const nome = path.basename
const extensao = path.extname

if(!fs.existsSync(caminhoPastaOrganizadora)) {
    fs.mkdirSync(caminhoPastaOrganizadora)
}

if(!fs.existsSync(caminhoPastaFinal)) {
    fs.mkdirSync(caminhoPastaFinal)
}

/*function leiameTXT() {
fs.writeFileSync(
        path.join(caminhoPastaOrganizadora, 'LEIAME.txt'),
        `========================================
   📂 Aplicação de Organização para Arquivos
========================================

 Bem-vindo(a)!  
 Você acaba de adquirir, uma ferramenta desenvolvida para facilitar 
 a organização automática de seus arquivos em seu computador.

 ----------------------------------------
 🔧 Manual de procedimento:

 ⭐ Atalho??
 ⭐ .config

 - Sua pasta, onde os arquivos serão enviados para organização, se chama "Say_Watcher" e se encontra em sua área de trabalho.

 - Sua pasta, com os arquivos já organizados fica, por padrão, em seus documentos

 - Mova seus arquivos para sua pasta Say_Watcher e aperte o atalho que você configurou
 
 - Dentro da pasta Say_Watcher, você encontrará um arquivo oculto chamado .config. Esse arquivo permite algumas mudanças no comportamento dessa aplicação. 

 ----------------------------------------
 Obrigado por confiar em nossa aplicação! 🚀`,
        'utf-8'
    )
}*/

/*if(!fs.existsSync(path.join(caminhoPastaOrganizadora, 'LEIAME.txt'))) {
    leiameTXT()
}*/

function mover_e_ValidarArquivos(arquivo) {
    if(fs.existsSync(path.join(caminhoPastaFinal, extensao(arquivo), nome(arquivo)))) {
       return fs.copyFileSync(
            path.join(caminhoPastaOrganizadora, nome(arquivo)),
            path.join(caminhoPastaFinal, extensao(arquivo), nome(arquivo).replace(extensao(arquivo),  `- copia${extensao(arquivo)}`))) 
    } else {
        return fs.copyFileSync(
            path.join(caminhoPastaOrganizadora, nome(arquivo)),
            path.join(caminhoPastaFinal, extensao(arquivo), nome(arquivo)))
    }
}

const arqPastaOrganizadora = fs.readdirSync(caminhoPastaOrganizadora, 'utf-8')
const arrayArquivos = []

arqPastaOrganizadora.forEach(arquivo => {
    if(arquivo !== 'LEIAME.txt' && arquivo !== '.config.txt') {//para que o sistema não leia os arquivos de configuração e instrução
        
        arrayArquivos.push(arquivo)
        
    }  
})
arrayArquivos.forEach(arquiv => {
            console.log(arquiv)
        })
console.log(arrayArquivos)

/*arqPastaOrganizadora.forEach(arquivo => {
    if(!fs.existsSync(path.join(caminhoPastaFinal, extensao(arquivo)))) {
        fs.mkdirSync(path.join(caminhoPastaFinal, extensao(arquivo)))

        mover_e_ValidarArquivos(arquivo)

    } else {
        mover_e_ValidarArquivos(arquivo)
    }
    fs.unlinkSync(path.join(caminhoPastaOrganizadora, nome(arquivo)))
})*/



/*
const fs = require('node:fs')

const arquivoDeConfiguracao = fs.readFileSync('./meu_arquivo.txt', 'utf-8')
const regex = /\{([^\}]+)\}/g
const opcoesEmString = arquivoDeConfiguracao.matchAll(regex)

const opcoesEmArray = [...opcoesEmString].map(valor => valor[1].replaceAll(' ', ''))


console.log(opcoesEmArray)
*/
