import express from 'express';
const router = express.Router();

// importar el modelo nota
import Event from '../models/event';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post una nota
router.post('/new-event', verificarAuth, async(req, res) => {
    const body = req.body;
    body.usuarioId = req.usuario._id;
    try {
      const eventDB = await Event.create(body);
      res.status(200).json(eventDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/event/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const eventDB = await Event.findOne({_id});
      res.json(eventDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});
  
// Get con todos los documentos
router.get('/events', verificarAuth, async(req, res) => {
    const creatorId = req.usuario._id;

    try {
      //const groupDb = await Group.find({usuarioId});
      const eventDB = await Event.find({creatorId});
      res.json(eventDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Delete eliminar una nota
router.delete('/event/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      /*const eventDB = await Event.findByIdAndDelete({_id});
      if(!eventDB){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(eventDb); */
      
      await Event.findById(_id,function(err,event){
        if(err) return next(err);
        const eventDB = event.remove()
        
        res.json(eventDB); 
      })


    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }




    try {
      //TODO: async await to natural promise
      await Period.findById(_id,function(err,period){
        if(err) return next(err);
        const periodDB = period.remove()
        
        res.json(periodDB); 
      })

  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
});

// Put actualizar una nota
router.put('/event/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const eventDb = await Event.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(eventDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;