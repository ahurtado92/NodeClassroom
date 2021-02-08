import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    name: {type: String, required: [true, 'Nombre obligatorio.']},
    extId: String,
    description: String,
    creatorId: String,
    group: String,
    roomId: String,
    initDate: Date,
    endDate: Date,

    accessGroups: [],
    modGroups: [],
    accessUsers: [],
    modUsers: [],
    color: String,
    material: [],
    date:{type: Date, default: Date.now}

});

// Validator
bookingSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Convertir a un modelo
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;