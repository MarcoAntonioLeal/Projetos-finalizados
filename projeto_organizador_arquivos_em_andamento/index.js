const { match } = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')

const caminhoPastaOrganizadora = path.join(os.homedir(), 'desktop', 'Say_Watcher')
const caminhoPastaFinal = path.join(os.homedir(), /*config()[1]*/'Pictures', 'Meus_arquivos')

const nome = path.basename
const extensao = path.extname

function criarPastas() { //verificará a existência das pastas
    if(!fs.existsSync(caminhoPastaOrganizadora)) {
        fs.mkdirSync(caminhoPastaOrganizadora)
    }
    
    if(!fs.existsSync(caminhoPastaFinal)) {
        fs.mkdirSync(caminhoPastaFinal)
    }
    
    if(!fs.existsSync(path.join(caminhoPastaOrganizadora, 'LEIAME.config'))) {
        fs.mkdirSync(path.join(caminhoPastaOrganizadora, 'LEIAME.config'))
    }
}
criarPastas()

function criarArquivos() { //verificará a existência e criará os arquivos TXT

    function leiameTXT() {
    fs.writeFileSync(
            path.join(caminhoPastaOrganizadora, 'LEIAME.config', 'LEIAME.txt'),
            `========================================
       📂 Aplicação de Organização para Arquivos
========================================
    
     Bem-vindo(a)!  
     Você acaba de adquirir, uma ferramenta desenvolvida para facilitar a organização automática de seus arquivos em seu computador.
    
     - Essa pasta chamada "Say_Watcher" será onde você colocará todos os seus arquivos que serão organizados
     
     - Dentro dela, você encontrou essa pasta "LEIAME.config" com dois arquivos, esse que está lendo agora e outro com algumas configurações da sua aplicação
     
     - A pasta onde os arquivos ficarão organizados se chama "Meus_arquivos" e, por padrão, será criada no endereço "Documentos" 
     
     - Não apague nem renomeie as pastas "Say_Watcher", "LEIAME.config" e "Meus_arquivos" nem apague ou renomeie os arquivos "LEIAME.txt" e ".config.txt"
     
     ---------------------------------------------
        🔧 Manual de procedimento:

     ⭐ Atalho??
     ⭐ .config
    
     - Mova seus arquivos para sua pasta Say_Watcher e aperte o atalho que você configurou
     
     - Dentro da pasta Say_Watcher, você encontrará essa pasta chamada LEIAME.config. Dentro dela, temos esse arquivo que está lendo agora e o arquivo .config, responsável por alterar alguns processos na sua aplicação.  
     ❗ - Não deixe de ler o seu arquivo .config - ❗
     ---------------------------------------------

     Obrigado por confiar em nossa aplicação! 🚀`,
            'utf-8'
        )
    }
    
    function configTXT() {
    fs.writeFileSync(
            path.join(caminhoPastaOrganizadora, 'LEIAME.config', '.config.txt'),
            `========================================
    const dirDocuments = 'Documents'
    const dirPictures = 'Pictures'
    const dirMusic = 'Music'
    const dirVideos = 'Videos'
    {nao} {Pictures} `,
            'utf-8'
        )
    }
    
    if(!fs.existsSync(path.join(caminhoPastaOrganizadora, 'LEIAME.config', 'LEIAME.txt'))) {
        leiameTXT()
    }

    if(fs.readFileSync(path.join(caminhoPastaOrganizadora, 'LEIAME.config', 'LEIAME.txt'), 'utf-8').length == '') {
        leiameTXT()
    }

    if(!fs.existsSync(path.join(caminhoPastaOrganizadora, 'LEIAME.config', '.config.txt'))) {
        configTXT()
    }
    
    if(config()[1] == undefined) {
        configTXT()
        
    } else if (config()[0] != config()[0].match(/sim|nao/)) {
        configTXT()
        
    } else if (config()[0] != config()[0].match(/sim|nao/)) {//ajustar

    }

    
}
criarArquivos()

function config() {

    const arquivoDeConfiguracao = fs.readFileSync(path.join(caminhoPastaOrganizadora, 'LEIAME.config', '.config.txt'), 'utf-8')
    const regex = /\{([^\}]+)\}/g
    const opcoesEmString = arquivoDeConfiguracao.matchAll(regex)
    const opcoesEmArray = [...opcoesEmString].map(valor => valor[1].toLocaleLowerCase().replaceAll(' ', '').replaceAll('ã', 'a'))

    return opcoesEmArray
}

function mover_e_ValidarArquivos(arquivo) {

    if(fs.existsSync(path.join(caminhoPastaFinal, extensao(arquivo), nome(arquivo)))) {
       return fs.copyFileSync(
            path.join(caminhoPastaOrganizadora, nome(arquivo)),
            path.join(caminhoPastaFinal, extensao(arquivo), nome(arquivo))) 
    } else {
        return fs.copyFileSync(
            path.join(caminhoPastaOrganizadora, nome(arquivo)),
            path.join(caminhoPastaFinal, extensao(arquivo), nome(arquivo)))
    }
}

const arqPastaOrganizadora = fs.readdirSync(caminhoPastaOrganizadora, 'utf-8')//array inicial dos arquivos
const arrayArquivos = [] //array final dos arquivos

arqPastaOrganizadora.forEach(arquivo => {
    if(arquivo !== 'LEIAME.config') {//para que o sistema não leia a pasta de configuração
        arrayArquivos.push(arquivo)
    }  
})

arrayArquivos.forEach(arquivo => {

    if(!fs.existsSync(path.join(caminhoPastaFinal, extensao(arquivo)))) {
        fs.mkdirSync(path.join(caminhoPastaFinal, extensao(arquivo)))

        mover_e_ValidarArquivos(arquivo)

    } else {
        mover_e_ValidarArquivos(arquivo)
    }

    if(config()[0] == 'nao' || config()[0] == '') { //opção (copiar ou mover) por padrão copiar
        fs.unlinkSync(path.join(caminhoPastaOrganizadora, nome(arquivo)))
    }
})

console.log(config())

/*
- Caso o arquivo .confg esteja vazio escrevê-lo novamente dentro da função criarArquivos()
- Nenhuma das opções pode ser vazia, se não criar como default (não, document, não)
- colocar duas opções a primeira de copiar e mover e a segunda opção de diretórios  
*/