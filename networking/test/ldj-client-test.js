'use strict'
const assert = require('assert')
const EventEmitter = require('events').EventEmitter
const LDFClient = require('../lib/ldj-client')

describe('LDJClient',() => {
    let stream = null
    let client = null

    beforeEach(() => {
        stream = new EventEmitter()
        client = new LDFClient(stream)
    })

    it('should emit message event', done => {
        client.on('message', msg => {
            assert.deepEqual(msg, {foo:'bar'})
            done()
        })
        stream.emit('data', '{"foo":"bar"}\n')
        process.nextTick(() => stream.emit('data', '"bar"}\n'));
    })

    it('should finish with in 5 secs', done => {
        setTimeout(done,4500)
    }).timeout(5000)
})