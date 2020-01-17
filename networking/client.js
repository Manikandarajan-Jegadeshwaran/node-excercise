'use strict'
const net = require('net')

const client = net.connect({port:60300})
client.on('data', data => {
    const msg = data && JSON.parse(data)
    
    if(msg.type === 'watching'){
        console.log(`Now watching : ${msg.file}`)
    }else if (msg.type === 'changed'){
        console.log(`File changed : ${msg.timeStmp}`)
    }else if(msg.type === 'newData'){
        console.log(`New Data : ${msg.data}`)
    }else {
        console.log('unknown type')
    }
})