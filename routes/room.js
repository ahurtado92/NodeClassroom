import express from 'express';
const router = express.Router();

// importar el modelo nota
import Room from '../models/room';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post una nota
router.post('/new-room', verificarAuth, async(req, res) => {
    const body = req.body;
    body.usuarioId = req.usuario._id;
    try {
      const roomDB = await Room.create(body);
      res.status(200).json(roomDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/room/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const roomDB = await Room.findOne({_id});
      res.json(roomDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});
  
// Get con todos los documentos
router.get('/rooms', verificarAuth, async(req, res) => {
    //const usuarioId = req.usuario._id;

    try {
      //const groupDb = await Group.find({usuarioId});
      const roomDB = await Room.find({});
      res.json(roomDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Delete eliminar una nota
router.delete('/room/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const roomDB = await Room.findByIdAndDelete({_id});
      if(!roomDB){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(roomDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Put actualizar una nota
router.put('/room/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const roomDB = await Room.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(roomDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;