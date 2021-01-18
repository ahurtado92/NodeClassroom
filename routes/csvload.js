import express from 'express';
const router = express.Router();

import Room from '../models/room';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post csv
router.post('/csv-load', verificarAuth, async(req, res) => {
    const body = req.body;
    body.usuarioId = req.usuario._id;
    var query = [];
    try {
      //const eventDB = await Event.create(body);
      //res.status(200).json(eventDB); 
      //await console.log(body)
      body.forEach(element => {
        //console.log(element.classroom)
        const roomName = element.classroom
        const room = Room.find({name: {$eq: "Sem_H"}});
        console.log(room.name)
        //query.id = element.id;
        //query.roomId = room._id;
        //console.log(query);
      });
      await res.status(200).json(body);
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;