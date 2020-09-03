const { Client } = require("discord.js");

const client = new Client({ partials: ['MESSAGE', 'REACTION'] });

// ----

client.once('message', async (message) => {

    if (message.author.bot || message.channel.type === 'dm') return;

    if (message.content.toLowerCase() === '?setup' && message.guild.ownerID === message.author.id) {
        try {
            const filter = (m) => m.author.id === message.author.id; 
            message.channel.send('Please enter the message id for this ticket');
            const msgId = (await message.channel.awaitMessages(filter, { max: 1 })).first().content;
            const fetchMsg = message.channel.messages.fetch(content);
            message.channel.send('Please enter the category id for this ticket');
            const categoryId = (await message.channel.awaitMessages(filter, { max: 1 })).first().content;
            const categoryChannel = client.channels.cache.get(categoryid);
            message.channel.send('Please enter all of the roles that have access to tickets');
            const roleIds = (await message.channel.awaitMessages(filter, { max: 1 })).first().content.split(/,\s*/);
            if (fetchMsg && categoryChannel) {
                for (const roleId of roles) {
                    if (message.guild.roles.cache.get(roleId)) throw new Error('Role does not exist');
                     
                    }
                }
            }
        } catch (err) {

        }
    }
});

client.on('messageReactionAdd', async (reaction, user) => {

}); 



// client login token