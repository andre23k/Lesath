import Mongoose from 'mongoose'
const { Schema, model } = Mongoose

export default model('Guild', new Schema({
    id: { type: String, unique: true },
    LogSystem: {
        messages: {
            active: Boolean,
            channel: String,
            webhookurl: String
        },
    }

}))
