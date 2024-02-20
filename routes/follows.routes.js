// Import middlewares
const auth = require("../middleware/auth");
const { admin, editor, viewer } = require("../middleware/roles");

const express = require('express')
const router = express.Router()
const followController =   require('../controlador/follows.controlador');

// Obtiene todos los follows
router.get('/', [auth, viewer], followController.findAll);
// Crea un usuario
router.post('/', [auth, viewer], followController.create);
// Obtiene un usuario mediante un id
router.get('/:id', [auth, viewer], followController.findById);
// Modifica un usuario mediante un id
router.put('/:id', [auth, viewer], followController.update);
// elimina un usuario mediante un id
router.delete('/:id', [auth, viewer], followController.delete);

module.exports = router