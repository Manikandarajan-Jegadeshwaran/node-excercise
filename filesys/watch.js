'use strict'
const fs = require('fs')
const spawn = require('child_process').spawn

const fileName = process.argv[2]
if(!fileName){
    throw Error('No File Supplied')
}
fs.watch(fileName,()=>{
    // const ls = spawn('ls',['-lh',fileName])
    // ls.stdout.pipe(process.stdout)
    console.log('file changed')
})
console.log('listening for changes ')