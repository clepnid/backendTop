// Import middlewares
const auth = require("../middleware/auth");

const express = require('express')
const router = express.Router()
const userController =   require('../controlador/usuarios.controlador');

// Obtiene todos los usuarios
router.get('/', [auth], userController.getInfo);
// Crea un usuario
router.post('/', [auth], userController.create);
// Obtiene un usuario mediante un id
router.get('/:id', [auth], userController.findById);
// Modifica un usuario mediante un id
router.put('/:id', [auth], userController.update);
// elimina un usuario mediante un id
router.delete('/:id', [auth], userController.delete);

module.exports = router