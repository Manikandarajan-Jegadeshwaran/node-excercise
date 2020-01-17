'use strict'
const fs = require('fs')

// fs.readFile('target.txt',(err,data) =>{
//     if(err){
//         throw err
//     }

//     console.log(data.toString())
// })

fs.createReadStream('target.txt')
.on('data',chunk=> process.stdout.write(chunk))
.on('error',err=>process.stdout.write(err.message))

