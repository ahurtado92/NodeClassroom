import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const instanceSchema = new Schema({

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

// Validator
instanceSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Convertir a un modelo
const Instance = mongoose.model('Instance', instanceSchema);

export default Instance;