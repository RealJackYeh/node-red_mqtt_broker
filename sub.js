let mqtt = require('mqtt')
let client = mqtt.connect('mqtt://localhost:1883')
let topic = "topic1"

client.subscribe(topic, {qos:1})
client.on('message', function(topic, message){
	console.log(topic, ": "+ message.toString())
})
