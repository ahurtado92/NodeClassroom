import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import Interval from '../models/interval';

const periodSchema = new Schema({

    name: {type: String, required: [true, 'Nombre obligatorio.']},
    initDate: Date,
    endDate: Date,
    creatorId: String,
    date:{type: Date, default: Date.now}

});

periodSchema.pre('remove', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    Interval.remove({periodId: this._id}).exec();
    next();
});

// Convertir a un modelo
const Period = mongoose.model('Period', periodSchema);

export default Period;