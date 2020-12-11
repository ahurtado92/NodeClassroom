import express from 'express';
const router = express.Router();

// importar el modelo nota
import Instance from '../models/instance';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post una nota
router.post('/new-instance', verificarAuth, async(req, res) => {
    const body = req.body;
    body.usuarioId = req.usuario._id;
    try {
      const instanceDB = await Instance.create(body);
      res.status(200).json(instanceDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/instance/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const instanceDB = await Instance.findOne({_id});
      res.json(instanceDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});
  
// Get con todos los documentos
router.get('/instances', verificarAuth, async(req, res) => {
    //const usuarioId = req.usuario._id;

    try {
      //const groupDb = await Group.find({usuarioId});
      const instanceDB = await Instance.find({});
      res.json(instanceDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Delete eliminar una nota
router.delete('/instance/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const instanceDB = await Instance.findByIdAndDelete({_id});
      if(!instanceDB){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(instanceDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Put actualizar una nota
router.put('/instance/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const instanceDB = await Instance.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(instanceDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;