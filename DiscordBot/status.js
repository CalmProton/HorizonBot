const ping = require('minecraft-server-util')
const botMessage = require('./botMessage')
const config = require('./config.json')
const Discord = require('discord.js')

const {Client, RichEmbed} = require('discord.js');

const pingDelay = config.pingDelay

module.exports = bot => {

    pingServer()

    function pingServer(){
        ping('play.horizoncraft.ru', 25565, (error, response) =>{
        if(error) {
            const offlineEmbed= new Discord.MessageEmbed()
                .setTitle ("server offline")

            botMessage(bot, '746702933491581019', offlineEmbed, ['😪'])
            }
        else {
            const onlineEmbed= new Discord.MessageEmbed()
                .setTitle ("Сервер в сети")
                .setURL('https://vk.com/horizoncraft/')
                .setAuthor('HorizonCraft')
                .setDescription('Проблем не обнаружено')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                )
                .addField('IP адрес:', response.host, true)
                .addField('На сервере:', response.onlinePlayers + '\u200B 🧙', true)
                .setColor(0xf5a225)
                .setImage('https://i.ibb.co/PhS2Kjh/shield2.png')
                .setTimestamp()
                .setFooter('vk.com/horizoncraft')

            botMessage(bot, '746702933491581019', onlineEmbed, ['😍'])
            }
        })
    }

    setInterval(function() {pingServer()}, pingDelay * 1000);
}