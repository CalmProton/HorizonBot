const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js');

module.exports = bot => {

bot.on('guildMemberAdd', member =>{
    const welcomeEmbed = new Discord.MessageEmbed()
    .setTitle ("Добро пожаловать")
    .setURL('https://vk.com/horizoncraft/')
    .setAuthor('HorizonCraft')
    .addFields(
        { name: '\u200B', value: '\u200B' },
    )
    .addField('IP адрес: play.horizoncraft.ru')
    .setFooter('Группа ВК: vk.com/horizoncraft')
    member.send(welcomeEmbed);
})

}