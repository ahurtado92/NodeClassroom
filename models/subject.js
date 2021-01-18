import express from 'express';
const router = express.Router();

// importar el modelo nota
import subject from '../models/subject';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post una nota
router.post('/new-subject', verificarAuth, async(req, res) => {
    //console.log(req.usuario._id);
    const body = req.body;
    body.creatorId = req.usuario._id;
    try {
      const subjectDB = await subject.create(body);
      res.status(200).json(subjectDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/subject/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const subjectDB = await subject.findOne({_id});
      res.json(subjectDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});
  
// Get con todos los documentos
router.get('/subjects', verificarAuth, async(req, res) => {
    //const usuarioId = req.usuario._id;

    try {
      //const subjectDb = await subject.find({usuarioId});
      const subjectDb = await subject.find({});
      res.json(subjectDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Delete eliminar una nota
router.delete('/subject/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const subjectDb = await subject.findByIdAndDelete({_id});
      if(!subjectDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(subjectDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Put actualizar una nota
router.put('/subject/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const subjectDb = await subject.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(subjectDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;