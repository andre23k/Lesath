import { ApplicationCommandType, PermissionFlagsBits } from 'discord.js';
import { PermissionsTranslate } from '../../util/constants.js'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { e } = require('../../JSON/emojis.json')

export default {
    name: "logs",
    description: "〔⚙️ Admin〕 Ative meu sistema de logs.",
    type: ApplicationCommandType.ChatInput,
    dm_permission: false,

    run: async (client, interaction) => {
        const { guild, member } = interaction

        if (!guild.members.me?.permissions.has(PermissionFlagsBits.ViewAuditLog) || !guild.members.me.permissions.has(PermissionFlagsBits.ManageWebhooks))
            return interaction.reply({
                content: `${e.Saphire_recusado} | Eu preciso da permissão **\`${PermissionsTranslate.ViewAuditLog}\`** e **\`${PermissionsTranslate.ManageWebhooks}\`** para executar este comando.`,
                ephemeral: true
            })

        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageGuild)) {
            interaction.reply({
                content: `${e.Saphire_recusado} | Você não tem permissão pra usar esse comando.`,
                ephemeral: true
            })
        }


        await interaction.reply({
            embeds: [{
                title: `Log System`,
                description: `**Um simples sistema de Logs que manda tudo que acontece no seu servidor em determinados canais.**`,
                fields: [
                    {
                        name: ``,
                        value: ``
                    }
                ]
            }]
        })

    }
}