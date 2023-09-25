import { Models } from "./Models.js"


export default new class Database extends Models {
    constructor() {
        super()

    }

    async getGuild(guildId) {
        if (!guildId) return null;

        const guildData = await this.Guild.findOne({ id: guildId });
        return guildData;
    }

    registerServer = async guild => {
        if (!guild || !guild?.id) return

        const g = await this.Guild.exists({ id: guild.id })

        if (g || g?.id === guild.id) return

        new this.Guild({ id: guild.id }).save()


        return;
    }

}
