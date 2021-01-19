import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    name: {type: String, required: [true, 'Nombre obligatorio.']},
    description: String,
    creatorId: String,
    roomId: String,
    initDate: Date,
    endDate: Date,
    accessGroups: [],
    modGroups: [],
    accessUsers: [],
    modUsers: [],
    color: String,
    material: [],
    date:{type: Date, default: Date.now}

});

// Convertir a un modelo
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;