import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
import Event from './event';
import Booking from './booking';

const roomSchema = new Schema({

    name: {type: String, unique: [true, 'Campo unico.'], required: [true, 'Nombre obligatorio.']},
    description: String,
    creatorId: String,
    supervisorId: String,
    localisation: String,
    capacity: String,
    image: String,
    material: [],
    date:{type: Date, default: Date.now}

});

roomSchema.pre('remove', async function() {
    try {
        await Event.deleteMany({roomId: this._id});
        await Booking.deleteMany({roomId: this._id});
    } catch(err) {
        console.log(err);
        next(err);
    }
});

// Validator
roomSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Convertir a un modelo
const Room = mongoose.model('Room', roomSchema);

export default Room;