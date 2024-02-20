// Import middlewares
const auth = require("../middleware/auth");
const { admin, editor, viewer } = require("../middleware/roles");

const express = require('express')
const router = express.Router()
const publicacionController =   require('../controlador/publicaciones.controlador');

// Obtiene todos los publicaciones
router.get('/', [auth, viewer], publicacionController.findAll);
// Crea un usuario
router.post('/', [auth, viewer], publicacionController.create);
// Obtiene un usuario mediante un id
router.get('/:id', [auth, viewer], publicacionController.findById);
// Modifica un usuario mediante un id
router.put('/:id', [auth, viewer], publicacionController.update);
// elimina un usuario mediante un id
router.delete('/:id', [auth, viewer], publicacionController.delete);

module.exports = router