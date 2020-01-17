'use strict'
const net = require('net')
const LDJClient = require('./lib/ldj-client')

const client = net.connect({port:60300})
const ldjClient = LDJClient.connect(client)
ldjClient.on('message', data => {
    const msg = data
    
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