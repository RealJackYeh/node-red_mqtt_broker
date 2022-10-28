let mqtt = require('mqtt')
let client = mqtt.connect('mqtt://localhost:1883')

let topic = 'topic1'
let message = '5'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('published finished!', message)
    }, 5000)
})