const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

bot.on('guildMemberAdd', member =>){
    const welcomeEmbed = new RichEmbed()
    .setTitle ("Welcome Embed");
    
    message.author.send(Embed);
}