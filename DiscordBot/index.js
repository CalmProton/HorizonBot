const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQ4MjUzMzI2OTgxODU3MzM3.X0avNw.v3XsOA5x07IJ47eDOoPJUhVOdjQ';

bot.on('ready', () => {
    console.log('Bot is Online!');
})

bot.on('message', msg=>{
    if(msg.content ===  "HELLO"){
        msg.reply('WORLD');
    }
})

bot.login(token);