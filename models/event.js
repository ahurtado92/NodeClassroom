import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventSchema = new Schema({

    name: {type: String, required: [true, 'Nombre obligatorio.']},
    description: String,
    creatorId: String,
    isSubject: {type: Boolean, default: false},
    date:{type: Date, default: Date.now}

});

// Convertir a un modelo
const Event = mongoose.model('Event', eventSchema);

export default Event;