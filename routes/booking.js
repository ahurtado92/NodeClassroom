import express from 'express';
const router = express.Router();

import Booking from '../models/booking';
import Group from '../models/group';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post una nota
router.post('/new-booking', verificarAuth, async(req, res) => {
    const body = req.body;
    if(!body.creatorId){
      body.creatorId = req.usuario._id;
    }
    try {
      const bookingDB = await Booking.create(body);
      res.status(200).json(bookingDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/booking/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const bookingDB = await Booking.findOne({_id});
      res.json(bookingDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/bookingsByRoom/:roomId', async(req, res) => {
  const roomId = req.params.roomId;
  try {
    const bookingDB = await Booking.find({roomId});
    res.json(bookingDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
  
// Get con todos los documentos
router.get('/bookings', verificarAuth, async(req, res) => {
    const creatorId = req.usuario._id;
    const group = req.usuario.group;
    const role = req.usuario.role;

    let bookingDB;

    try {

      if(role == 'TEACHER'){
        bookingDB = await Booking.find( { $or:[ {'creatorId':creatorId}, {'group':group} ] });
      }else if (role == 'USER') {
        bookingDB = await Booking.find( {'group':group} );
      }else{
        bookingDB = await Booking.find({});
      }
      //const bookingDB = await Booking.find( { $or:[ {'creatorId':creatorId}, {'group':group} ] });
      res.json(bookingDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Delete eliminar una nota
router.delete('/booking/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const bookingDB = await Booking.findByIdAndDelete({_id});
      if(!bookingDB){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(bookingDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Put actualizar una nota
router.put('/booking/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const bookingDB = await Booking.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(bookingDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;