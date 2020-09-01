module.exports = bot => {
    const channelIDs = [
        '712340846044905534', //идеи
        '746705740256903198' //обьявления
    ]

    const addReactions = (message) => {
        message.react('👍')

        setTimeout(() => {
          message.react('👎')
        }, 550)
      }

      bot.on('message', async (message) => {
        if (channelIDs.includes(message.channel.id)) {
          addReactions(message)
        } else if (message.content.toLowerCase() === '!poll') {
          await message.delete()

          const fetched = await message.channel.messages.fetch({ limit: 1 })
          if (fetched && fetched.first()) {
            addReactions(fetched.first())
          }
        }
      })
    }