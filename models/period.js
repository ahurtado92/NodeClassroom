import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import Interval from '../models/interval';

const periodSchema = new Schema({

    name: {type: String, required: [true, 'Nombre obligatorio.']},
    initDate: Date,
    endDate: Date,
    creatorId: String,
    date:{type: Date, default: Date.now},

    intervals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Interval"
        }
        
    ]

});

periodSchema.pre('remove', async function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    //Interval.remove({periodId: this._id}).exec();
    //console.log("Removing!" + this._id);
    //next();
    //console.log("Removing!");
    //next();
    try {
        await Interval.remove({
            "_id": {
            $in: this.intervals
            }
        })
        next();
    } catch(err) {
        next(err);
    }
});

// Convertir a un modelo
const Period = mongoose.model('Period', periodSchema);

export default Period;