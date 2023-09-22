import client from '../client.js'
import { InteractionType } from 'discord.js';

client.on('interactionCreate', (interaction) => {
   client.interactions++

   if (interaction.isButton()) {
      if (interaction.customId.includes(`{`)) {
         const data = JSON.parse(interaction.customId)
         if (data.key == 'ping') return client.slashCommands.get('ping').run(client, interaction, true)
      }

   }
   if (interaction.type === InteractionType.ApplicationCommand) {

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      cmd.run(client, interaction)
   }
});


