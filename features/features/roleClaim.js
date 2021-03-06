const botMessage = require('@util/botMessage')
const Discord = require('discord.js')

const {Client, RichEmbed} = require('discord.js');

module.exports = (bot) => {
  const channelId = '750709787095990403'

  const getEmoji = (emojiName) =>
    bot.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    verified: 'Игрок',
  }
  const reactions = []

  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)
   }

  // const message = msg.channel.messages.fetch(messageId)

  // botMessage(bot, channelId, messageText, reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '748253326981857337') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  bot.on('messageReactionAdd', (reaction, user) => {
    console.log("added reaction" + reaction + user)
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  bot.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}