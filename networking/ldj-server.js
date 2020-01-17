'use strict'
const fs = require('fs')
const net = require('net')
const fileName = process.argv[2]

if(!fileName){
    throw Error('No file specified')
}

net.createServer(con => {
    console.log('client connected')
    con.write(`${JSON.stringify({type:'watching',file:fileName})}\n`)

    let timer
    const watcher = fs.watch(fileName,()=>{
        const firstChunk = '{"type":"changed","timesta';
        const secondChunk = 'mp":1450694370094}\n';
        con.write(firstChunk)

        timer = setTimeout(() => {
            con.write(secondChunk)
            //con.end()
        }, 100);
        //con.write(`${JSON.stringify({type:'changed',timeStmp:new Date()})}\n`)
        
    })
    con.on('end',() => {
        console.log('client disconnected')
        clearTimeout(timer)  
    })

    con.on('close',() => {
        console.log('client disconnected')
        watcher.close()
        con.end()
    })

}).listen(60300,() => console.log('...Listening at 60300'))

// run - node netWatcher.js target.txt
//client run - telnet localhost 60300


//close server - ctrl + ] -> type 'quit' and press 'Enter'