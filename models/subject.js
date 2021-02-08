import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const subjectSchema = new Schema({

    name: {type: String, unique: [true, 'Campo unico.'], required: [true, 'Nombre obligatorio.']},
    description: String,
    color: String,
    creatorId: String,
    color: String,
    date:{type: Date, default: Date.now}

});

// Validator
subjectSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Convertir a un modelo
const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;