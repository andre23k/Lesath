import mongoose from "mongoose"
import client from "../client.js"

client.once('ready', async () => {
import("../handlers/handler.commands.js").then(fn => fn.default(client))
    mongoose.set('strictQuery', true);

    await mongoose.connect(process.env.DATABASE_TOKEN)
    .then(() => { console.log(`Connected Database | OK!`) })
        .catch(err => {
            console.log('Mongoose Database | FAIL!\n--> ' + err)
            return process.exit(12)
        })

    console.log('Event Ready | OK')
})