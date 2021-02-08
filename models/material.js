import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const materialSchema = new Schema({

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
userSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Convertir a un modelo
const Material = mongoose.model('Material', materialSchema);

export default Material;