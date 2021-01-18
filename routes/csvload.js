import express from 'express';
const router = express.Router();


const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Post csv
router.post('/csv-load', verificarAuth, async(req, res) => {
    const body = req.body;
    body.usuarioId = req.usuario._id;
    
    try {
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