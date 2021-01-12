import express from 'express';
const router = express.Router();

// importar el modelo nota
import Interval from '../models/interval';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post una nota
router.post('/new-interval', verificarAuth, async(req, res) => {
    //console.log(req.usuario._id);
    const body = req.body;
    body.creatorId = req.usuario._id;
    try {
      const intervalDB = await Interval.create(body);
      res.status(200).json(intervalDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/interval/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const intervalDB = await Interval.findOne({_id});
      res.status(200).json(intervalDB); 
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});
  
// Get con todos los documentos
router.get('/interval', verificarAuth, async(req, res) => {
    //const usuarioId = req.usuario._id;

    try {
      //const groupDb = await Group.find({usuarioId});
      const intervalDb = await Interval.find({});
      res.json(intervalDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Delete eliminar una nota
router.delete('/interval/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const intervalDb = await Interval.findByIdAndDelete({_id});
      if(!intervalDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(intervalDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Put actualizar una nota
router.put('/interval/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const intervalDb = await Interval.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(intervalDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;