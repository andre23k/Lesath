import fs from 'fs'
import { Routes } from "discord.js";
import client from '../client.js'

export default async () => {
    const SlashsArray = []
    const subfolders = fs.readdirSync(`src/commands/`)
    subfolders.map(async subfolder => {
        const files = fs.readdirSync(`src/commands/${subfolder}/`)
        files.forEach(async file => {
            if (!file.endsWith('.js')) return;
            const commandfile = await import(`../commands/${subfolder}/${file}`);
            const command = commandfile.default
          
            if (!command?.name) return;
            client.slashCommands.set(command.name, command);
            SlashsArray.push(command)
        })
    })

    await client.rest.put(
        Routes.applicationCommands(client.user.id),
        { body: SlashsArray },
    );
    console.log(`${client.slashCommands.size} SlashCommands | OK!`)

}

