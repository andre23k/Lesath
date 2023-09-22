import "dotenv/config.js"
import client from "./client.js";
import './events/index.js'
import './handlers/handler.events.js'
import './services/discloud/index.js'

client.login()