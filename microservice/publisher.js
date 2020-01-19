'use strict'
const fs = require('fs')
const zmq = require('zeromq')
const fileName = process.argv[2]

const publisher = zmq.socket('pub')

fs.watch(fileName,() => {
    publisher.send(JSON.stringify({
        type: 'changed',
        file: fileName,
        timeStamp: Date.now()
    }))
})

publisher.bind('tcp://*:60400', err => {
    if(err){
        throw err
    }
    console.log('Listentin for zmq subscribers...')
})