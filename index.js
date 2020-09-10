require('module-alias/register')

const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('@root/config.json')

const loadFeatures = require('@root/features/loadFeatures')

const commands = require('@util/commands')
const botMessage = require('@util/botMessage')

const {Client, RichEmbed} = require('discord.js');

/*
const faqEmbed= new Discord.MessageEmbed()
    .setTitle ("Тестируем");
*/

bot.on('ready', () => {
    console.log('Bot is Online!');

    loadFeatures(bot)

    //botMessage(bot, '708059100692480092', faqEmbed, ['😀'])
})

bot.login(process.env.TOKEN);