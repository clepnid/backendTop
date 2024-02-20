// Import middlewares
const auth = require("../middleware/auth");
const { admin, editor, viewer } = require("../middleware/roles");

const express = require('express')
const router = express.Router()
const temaController =   require('../controlador/temas.controlador');

// Obtiene todos los temas
router.get('/', [auth, viewer], temaController.findAll);
// Crea un usuario
router.post('/', [auth, viewer], temaController.create);
// Obtiene un usuario mediante un id
router.get('/:id', [auth, viewer], temaController.findById);
// Modifica un usuario mediante un id
router.put('/:id', [auth, viewer], temaController.update);
// elimina un usuario mediante un id
router.delete('/:id', [auth, viewer], temaController.delete);

module.exports = router