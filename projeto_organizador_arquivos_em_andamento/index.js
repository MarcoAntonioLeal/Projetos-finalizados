const fs = require('node:fs')
const path = require('node:path')


fs.watch('C:/Users/marc-/OneDrive/Desktop/Sayo', {persistent: true} ,(a, b) => {
    console.log(a, b)
})

console.log(2+3)
console.log('olá mundo')

