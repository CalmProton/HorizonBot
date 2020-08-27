const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQ4MjUzMzI2OTgxODU3MzM3.X0avNw.v3XsOA5x07IJ47eDOoPJUhVOdjQ';

const PREFIX = '%';

var version = '0.1';

const greeting = require('./greeting')

bot.on('ready', () => {
    console.log('Bot is Online!');

    greeting(bot)
})



bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'vk':
            message.channel.send('vk.com/horizoncraft')
            break;
        case 'info':
            if(args[1] === 'version'){
              message.reply(version)
            }
            else{
              message.channel.send('Invalid Args')
            }
            break;

    }
})

bot.login(token);