const express = require('express');
const router = express.Router();
const tareasController = require('../controller/tareasController');

// api/usuarios
router.post('/', tareasController.crearTareas);
router.get('/', tareasController.obtenerTareas);
router.put('/:id', tareasController.actualizarTareas);
router.delete('/:id', tareasController.eliminarTareas);

module.exports = router;