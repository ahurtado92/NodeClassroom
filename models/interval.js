import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const intervalSchema = new Schema({

    extId: {type: Number, required: [true, 'ID obligatorio.']},
    initDate: Date,
    endDate: Date,
    creatorId: String,
    date:{type: Date, default: Date.now}

});

// Convertir a un modelo
const Interval = mongoose.model('Interval', intervalSchema);

export default Interval;