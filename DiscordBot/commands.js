const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '%';

var version = '0.1';

module.exports = bot => {

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'vk':
            message.channel.send('vk.com/horizoncraft')
            break;
        case 'info':
            if(args[1] === 'version'){
              message.channel.send(version)
            }
            else{
              message.channel.send('Invalid Args')
            }
            break;

    }
})

}