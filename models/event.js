import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import Booking from './booking';

const eventSchema = new Schema({

    //name: {type: String, required: [true, 'Nombre obligatorio.']},
    //description: String,
    extId: {type: String, unique: [true, 'Campo unico.'], required: [true, 'Nombre obligatorio.']},
    group: String,
    creatorId: String,
    subject: String,
    roomId: String,
    weekday: String,
    interval: String,
    date:{type: Date, default: Date.now}

});

eventSchema.pre('remove', async function() {
    try {
        await Booking.deleteMany({extId: this.extId});
    } catch(err) {
        console.log(err);
        next(err);
    }
});

// Convertir a un modelo
const Event = mongoose.model('Event', eventSchema);

export default Event;