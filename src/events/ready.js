import mongoose from "mongoose"
import client from "../client.js"
client.once('ready', () => readybot())

function readybot() {
    connectDatabase()
    console.log('Event Ready | OK')
}

function connectDatabase() {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DATABASE_TOKEN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => { console.log(`Connected Database | OK!`) })
        .catch(err => { console.log(err) })

}