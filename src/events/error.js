import client from '.././client.js'

client.on("error", console.error)

process.on('uncaughtExceptionMonitor', async reason => {
    console.log(reason)
    const user = await client.users.fetch('648389538703736833').catch(() => null)
    if (!user) return
    user.send({
        embeds: [{
            color: 0xff0000,
            title: '📢 Error Handler | UnhandledRejection',
            description: `\n\`\`\`js\n${reason.stack}\`\`\``.slice(0, 4096),
            footer: { text: `Error Code: ${reason.code || 0}` }

        }]
    }).catch(() => { })
});

process.on('exit', code => {
    console.log({
        1: "Host Disabled Application",
        10: "No host name provided #6815",
        11: "Bot is already online in another host",
        12: "Mongoose Database Connection Failed",
        13: "Cluster has been disconnected."
    }[code] || `[${code}] - Motivo de Queda Desconhecido`)
})