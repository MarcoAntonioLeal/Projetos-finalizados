const fs = require('node:fs')
const path = require('node:path')

const dirOrganizador = fs.readdirSync('C:/Users/marc-/OneDrive/Desktop/Sayo', 'utf-8')

dirOrganizador.forEach(nomeArquivo => {
    if (path.extname(nomeArquivo) !== '.ini') {
        console.log(path.extname(nomeArquivo))
    }
})



/*fs.watch('C:/Users/marc-/OneDrive/Desktop/Sayo', {persistent: true} ,(a, b) => {
    console.log(a, b)
})*/