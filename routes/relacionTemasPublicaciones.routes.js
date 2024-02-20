// Import middlewares
const auth = require("../middleware/auth");
const { admin, editor, viewer } = require("../middleware/roles");

const express = require('express')
const router = express.Router()
const relacionTemaPublicacionController =   require('../controlador/relacionTemasPublicaciones.controlador');

// Obtiene todos los relacionTemasPublicaciones
router.get('/', [auth, viewer], relacionTemaPublicacionController.findAll);
// Crea un usuario
router.post('/', [auth, viewer], relacionTemaPublicacionController.create);
// Obtiene un usuario mediante un id
router.get('/:id', [auth, viewer], relacionTemaPublicacionController.findById);
// Modifica un usuario mediante un id
router.put('/:id', [auth, viewer], relacionTemaPublicacionController.update);
// elimina un usuario mediante un id
router.delete('/:id', [auth, viewer], relacionTemaPublicacionController.delete);

module.exports = router