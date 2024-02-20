// Import middlewares
const auth = require("../middleware/auth");
const { admin, editor, viewer } = require("../middleware/roles");

const express = require('express');
const router = express.Router();
const imagenElementoPublicacionController =   require('../controlador/imagenesElementosPublicaciones.controlador');
const multer = require('multer');

function generarStringAleatorio(size) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';

  for (let i = 0; i < size; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres.charAt(indiceAleatorio);
  }

  return resultado;
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, generarStringAleatorio(20) + file.originalname);
  }
});

var upload = multer({ storage: storage });

// Obtiene todos los imagenesElementosPublicaciones
router.get('/', [auth, viewer], imagenElementoPublicacionController.findAll);
// Crea un usuario
router.post('/', [auth, viewer], imagenElementoPublicacionController.create);
// Crea un usuario
router.post('/imagen/', [auth, viewer, upload.array("files")], imagenElementoPublicacionController.uploadImagen);
// Obtiene un usuario mediante un id
router.get('/:id', [auth, viewer], imagenElementoPublicacionController.findById);
// Modifica un usuario mediante un id
router.put('/:id', [auth, viewer], imagenElementoPublicacionController.update);
// elimina un usuario mediante un id
router.delete('/:id', [auth, viewer], imagenElementoPublicacionController.delete);

module.exports = router