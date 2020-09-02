const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json')

const greeting = require('@modules/greeting')
const commands = require('@modules/commands')
const poll = require('@modules/poll')
const status = require('@modules/status')
const memberCount = require('@modules/memberCount')

const botMessage = require('@modules/botMessage')

const {Client, RichEmbed} = require('discord.js');

/*
const faqEmbed= new Discord.MessageEmbed()
    .setTitle ("Тестируем");
*/

bot.on('ready', () => {
    console.log('Bot is Online!');

    greeting(bot)
    commands(bot)
    poll(bot)
    status(bot)
    memberCount(bot)

    botMessage(bot, '708059100692480092', faqEmbed, ['😀'])
})

bot.login(config.token);