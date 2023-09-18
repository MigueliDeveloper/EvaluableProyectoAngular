const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/tareasController');

// api/usuarios
router.post('/', tareasController.crearTareas);
router.get('/', tareasController.obtenerTareas);
router.put('/:id', tareasController.actualizarTareas);
router.get('/:id', tareasController.obtenerTareas);
router.delete('/:id', tareasController.eliminarTareas);

module.exports = router;