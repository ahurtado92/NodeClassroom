import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const intervalSchema = new Schema({

    extId: {type: Number,unique: [true, 'Campo unico.'], required: [true, 'ID obligatorio.']},
    initDate: String,
    endDate: String,
    periodId: String,
    creatorId: String,
    date:{type: Date, default: Date.now}

});

// Validator
intervalSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Convertir a un modelo
const Interval = mongoose.model('Interval', intervalSchema);

export default Interval;