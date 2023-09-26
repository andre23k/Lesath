import { Events, Guild } from 'discord.js'
import client from '../../client.js'
import Database from '../../database/Database.js'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { e } = require('../../JSON/emojis.json')

client.on(Events.GuildDelete, async guild => {
    
    Database.deleteGuild(guild.id)
    if (!guild.ownerId) return
    const owner = await client.users.fetch(guild.ownerId).catch(() => null)

    const channelLog = client.channels.cache.get('1154599806715559966')
    channelLog.send({
        embeds: [{
            color: 0xed4245,
            title: `Servidor Removido`,
            fields: [
                {
                    name: 'Servidor',
                    value: `${guild.name} *\`(${guild.id})\`*`
                },
                {
                    name: 'Status',
                    value: `**Dono:** ${owner?.username || '\`Not Found\`'} *\`(${guild.ownerId})\`*\n**Membros:** ${guild.memberCount}`
                }
            ]
        }]
    })
})