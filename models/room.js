import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const roomSchema = new Schema({

    name: {type: String, required: [true, 'Nombre obligatorio.']},
    description: String,
    creatorId: String,
    supervisorId: String,
    localisation: String,
    capacity: String,
    image: String,
    material: [],
    date:{type: Date, default: Date.now}

});

// Convertir a un modelo
const Room = mongoose.model('Room', roomSchema);

export default Room;