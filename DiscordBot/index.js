const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQ4MjUzMzI2OTgxODU3MzM3.X0avNw.v3XsOA5x07IJ47eDOoPJUhVOdjQ';

const PREFIX = '%';

bot.on('ready', () => {
    console.log('Bot is Online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;

    }
})

bot.login(token);