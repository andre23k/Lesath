import { Events } from 'discord.js'
import client from '../../client.js'
import Database from '../../database/Database.js'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { e } = require('../../JSON/emojis.json')

client.on(Events.GuildCreate, async guild => {
    const server = await Database.getGuild(guild.id)
    if (!server) await Database.registerServer(guild)

    const owner = await client.users.fetch(guild?.ownerId || "undefined").catch(() => null)

    const channelLog = client.channels.cache.get('1154599806715559966')
    channelLog.send({
        embeds: [{
            color: 0x57f287,
            title: `Servidor Adicionado`,
            fields: [
                {
                    name: 'Status',
                    value: `**Dono:** ${owner?.username || '`Not Found`'} *\`${guild?.ownerId || '0'}\`*\n**Membros:** ${guild.memberCount}`
                },
                {
                    name: 'Register',
                    value: `O servidor ${guild.name} foi registrado com sucesso!`
                }
            ]
        }],
    })
});
