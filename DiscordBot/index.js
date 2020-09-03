require('module-alias/register')

const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('@root/config.json')

const greeting = require('@features/greeting')
const commands = require('@util/commands')
const poll = require('@features/poll')
const status = require('@features/status')
const memberCount = require('@features/memberCount')
const roleClaim = require('@features/roleClaim')

const botMessage = require('@util/botMessage')

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
    roleClaim(bot)

    //botMessage(bot, '708059100692480092', faqEmbed, ['😀'])
})

bot.login(config.token);