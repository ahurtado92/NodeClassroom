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
router.delete('/period/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        //TODO: async await to natural promise
        /*Interval.deleteMany({ "periodId" : _id },);
        const periodDB = await Period.findByIdAndDelete({_id});
        if(!periodDB){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }*/
        
        
        /*UserSchema.pre('deleteOne', { document: false, query: true }, async function() {
          const doc = await this.model.findOne(this.getFilter());
          await UserLink.deleteMany({ user: doc._id });
        });*/
        
        //const periodDB = await Period.findByIdAndRemove(_id);
        console.log('Erasing!');
        const periodDB = await Period.findByIdAndRemove("123");
        console.log('Erased!');

    
        if(!periodDB){
          return res.status(400).json({
            mensaje: 'No se encontró el id indicado'
          })
        }
        
        res.json(periodDB);  
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