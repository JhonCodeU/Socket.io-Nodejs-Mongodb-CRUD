import { Schema, model } from 'mongoose';

const Note = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true,
})

export default model('Note', Note);