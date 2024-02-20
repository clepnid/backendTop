// Import middlewares
const auth = require("../middleware/auth");
const { admin, editor, viewer } = require("../middleware/roles");

const express = require('express')
const router = express.Router()
const elementoPublicacionController =   require('../controlador/elementosPublicaciones.controlador');

// Obtiene todos los elementosPublicaciones
router.get('/', [auth, viewer], elementoPublicacionController.findAll);
// Crea un usuario
router.post('/', [auth, viewer], elementoPublicacionController.create);
// Obtiene un usuario mediante un id
router.get('/:id', [auth, viewer], elementoPublicacionController.findById);
// Modifica un usuario mediante un id
router.put('/:id', [auth, viewer], elementoPublicacionController.update);
// elimina un usuario mediante un id
router.delete('/:id', [auth, viewer], elementoPublicacionController.delete);

module.exports = router