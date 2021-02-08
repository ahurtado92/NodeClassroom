import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//import Interval from './interval';
import Interval from './interval';

const periodSchema = new Schema({

    name: {type: String, required: [true, 'Nombre obligatorio.']},
    initDate: Date,
    endDate: Date,
    creatorId: String,
    date:{type: Date, default: Date.now},

});

periodSchema.pre('remove', async function() {
    try {
        await Interval.deleteMany({periodId: this._id});
    } catch(err) {
        console.log(err);
        next(err);
    }
});


// Validator
userSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Convertir a un modelo
const Period = mongoose.model('Period', periodSchema);

export default Period;