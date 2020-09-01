const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js');

module.exports = bot => {

bot.on('guildMemberAdd', member =>{
    const welcomeEmbed = new Discord.MessageEmbed()
    .setTitle ("Welcome Embed");

    member.send(welcomeEmbed);
})

}