module.exports = (bot) => {
    const isInvite = async (guild, code) => {
      return await new Promise((resolve) => {
        if (guild !== null) {
        guild.fetchInvites().then((invites) => {
          for (const invite of invites) {
            if (code === invite[0]) {
              resolve(true)
              return
            }
          }

          resolve(false)
        })
    }
      })
    }

    bot.on('message', async (message) => {
      const { guild, member, content } = message

      // discord.gg/23RAN4

      const code = content.split('discord.gg/')[1]

      if (content.includes('discord.gg/')) {
        const isOurInvite = await isInvite(guild, code)
        if (!isOurInvite) {
            member.send('Вы были выгнаны за рекламу чужого сервера \nПрисоеденитесь назад по ссылке- https://discord.gg/pbwMugE\nБольше не кидайте ссылки на чужие сервера!')
            setTimeout(function(){
                member.kick()
            }, 1000);
            message.delete()
        }
      }
    })
  }