const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js');

module.exports = bot => {

bot.on('guildMemberAdd', member =>{
    const welcomeEmbed = new Discord.MessageEmbed()
    .setTitle ("Добро пожаловать")
    .setURL('https://vk.com/horizoncraft/')
    .setAuthor('HorizonCraft')
    .setDescription('Проблем не обнаружено')
    .addField('IP адрес: play.horizoncraft.ru')
    .setFooter('Группа ВК: vk.com/horizoncraft')
    member.send(welcomeEmbed);
})

}