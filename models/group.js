import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const groupSchema = new Schema({

    name: {type: String, unique: [true, 'Campo unico.'], required: [true, 'Nombre obligatorio.']},
    description: String,
    creatorId: String,
    members:[],
    date:{type: Date, default: Date.now}

});

// Validator
groupSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Convertir a un modelo
const Group = mongoose.model('Group', groupSchema);

export default Group;