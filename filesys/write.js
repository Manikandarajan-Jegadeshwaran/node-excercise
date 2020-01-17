'use strict'
const fs = require('fs')

fs.writeFile('target.txt', 'mani', err => {
    if(err){
        throw err
    }

    console.log('file saved')
})