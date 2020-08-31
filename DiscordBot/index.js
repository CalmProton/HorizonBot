const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json')

const greeting = require('./greeting')
const commands = require('./commands')
const poll = require('./poll')
const status = require('./status')
const memberCount = require('./memberCount')

const botMessage = require('./botMessage')

const {Client, RichEmbed} = require('discord.js');

const faqEmbed= new Discord.MessageEmbed()
    .setTitle ("Тестируем");

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