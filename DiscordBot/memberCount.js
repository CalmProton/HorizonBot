module.exports = bot => {
    const channelID = '745660399499608126'

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelID)
        channel.setName(`👥 ${guild.memberCount.toLocaleString()} Участников`)
    }

    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = bot.guilds.cache.get('707703078018744515')
    updateMembers(guild)
}