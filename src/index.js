import "dotenv/config.js"
import client from "./client.js";
client.once('ready', () => console.log('ok'))
client.login()