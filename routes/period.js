import express from 'express';
const router = express.Router();

// importar el modelo nota
import Period from '../models/period';
import Interval from '../models/interval';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post una nota
router.post('/new-period', verificarAuth, async(req, res) => {
    //console.log(req.usuario._id);
    const body = req.body;
    body.creatorId = req.usuario._id;
    try {
      const periodDB = await Period.create(body);
      res.status(200).json(periodDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/period/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const periodDB = await Period.findOne({_id});
      res.status(200).json(periodDB); 
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});
  
// Get con todos los documentos
router.get('/periods', verificarAuth, async(req, res) => {
    //const usuarioId = req.usuario._id;

    try {
      //const groupDb = await Group.find({usuarioId});
      const periodDB = await Period.find({});
      res.json(periodDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Delete eliminar una nota
router.delete('/period/:id', (req, res, next) => {
    const _id = req.params.id;
    try {
        //TODO: async await to natural promise
        Period.findById(_id,function(err,period){
          if(err) return next(err);
          await period.remove()
          
          //res.json(periodDB); 
        })

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Put actualizar una nota
router.put('/period/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const periodDB = await Period.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(periodDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;