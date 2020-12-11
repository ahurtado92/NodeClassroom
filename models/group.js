import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const groupSchema = new Schema({

    name: {type: String, required: [true, 'Nombre obligatorio.']},
    description: String,
    creatorId: String,
    members:[],
    date:{type: Date, default: Date.now}

});

// Convertir a un modelo
const Group = mongoose.model('Group', groupSchema);

export default Group;