// Import middlewares
const auth = require("../middleware/auth");
const { admin, editor, viewer } = require("../middleware/roles");

const express = require('express')
const router = express.Router()
const imagenPublicacionController =   require('../controlador/imagenesPublicacion.controlador');

// Obtiene todos los imagenesPublicacion
router.get('/', [auth, viewer], imagenPublicacionController.findAll);
// Crea un usuario
router.post('/', [auth, viewer], imagenPublicacionController.create);
// Obtiene un usuario mediante un id
router.get('/:id', [auth, viewer], imagenPublicacionController.findById);
// Modifica un usuario mediante un id
router.put('/:id', [auth, viewer], imagenPublicacionController.update);
// elimina un usuario mediante un id
router.delete('/:id', [auth, viewer], imagenPublicacionController.delete);

module.exports = router