import express from 'express';
const router = express.Router();

// importar el modelo nota
import Material from '../models/material';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post una nota
router.post('/new-material', verificarAuth, async(req, res) => {
    const body = req.body;
    body.usuarioId = req.usuario._id;
    try {
      const materialDB = await Material.create(body);
      res.status(200).json(materialDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/material/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const materialDB = await Material.findOne({_id});
      res.json(materialDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});
  
// Get con todos los documentos
router.get('/materials', verificarAuth, async(req, res) => {
    //const usuarioId = req.usuario._id;

    try {
      //const groupDb = await Group.find({usuarioId});
      const materialDB = await Material.find({});
      res.json(materialDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Delete eliminar una nota
router.delete('/material/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const materialDB = await Material.findByIdAndDelete({_id});
      if(!materialDB){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(materialDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Put actualizar una nota
router.put('/material/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const materialDB = await Material.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(materialDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;