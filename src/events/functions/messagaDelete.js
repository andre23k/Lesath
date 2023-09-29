import client from '../../client.js'
import { Events, AuditLogEvent } from 'discord.js'
import Database from '../../database/Database.js'

client.on(Events.MessageDelete, async message => {
    
    if (message.partial) return;

    const { guild, author, type } = message
    if (type !== 0 || author?.bot) return

    const guildData = await Database.getGuild(guild.id)
    if (!guildData || !guildData.LogSystem?.channel || !guildData.LogSystem?.messages?.active) return

    const logs = await guild.fetchAuditLogs({ type: AuditLogEvent.MessageDelete }).catch(() => null)
    if (!logs) return
})