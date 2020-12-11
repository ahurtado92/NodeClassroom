import express from 'express';
import User from '../models/user';
const router = express.Router();

// importar el modelo nota
import Nota from '../models/user';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Filtrar campos de PUT
const _ = require('underscore');

router.post('/nuevo-usuario', async(req, res) => {
    //const body = req.body;
    const body = {
        role: req.body.role,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        phone: req.body.phone,
        birth: req.body.birth,
        email: req.body.email,
        uname: req.body.uname,
        avatar: req.body.avatar
    }

    body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

    try {
        const usuarioDB = await User.create(body);
        res.json(usuarioDB);
    } catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.put('/usuario/:id', [verificarAuth, verificarAdministrador], async(req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'role', 'pass']);
    if(body.pass){
      body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
    }
  
    try {
      // {new:true} nos devuelve el usuario actualizado
      const usuarioDB = await User.findByIdAndUpdate(id, body, {new: true, runValidators: true});
  
      return res.json(usuarioDB);
  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      });
    }
  
});

router.delete('/usuario/:id', async(req, res) => {

    let id = req.params.id;
  
    try {
  
      const usuarioDelete = await User.findByIdAndRemove(id);
  
      if(!usuarioDelete){
        return res.status(400).json({
          mensaje: 'Usuario no encontrado'
        })
      }
  
      return res.json(usuarioDelete);
      
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  
});

module.exports = router;