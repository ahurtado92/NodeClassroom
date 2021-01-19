import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const subjectSchema = new Schema({

    name: {type: String, required: [true, 'Nombre obligatorio.']},
    description: String,
    color: String,
    creatorId: String,
    color: String,
    date:{type: Date, default: Date.now}

});

// Convertir a un modelo
const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;