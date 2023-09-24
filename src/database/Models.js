import mongoose from "mongoose";
import ModelGuild from './models/guild.js'

class Models {
    constructor() {
        this.Guild = ModelGuild
    }
}

export {
    Models
}

