const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json')

const greeting = require('./greeting')
const commands = require('./commands')
const poll = require('./poll')

bot.on('ready', () => {
    console.log('Bot is Online!');

    greeting(bot)
    commands(bot)
    poll(bot)
})

bot.login(config.token);