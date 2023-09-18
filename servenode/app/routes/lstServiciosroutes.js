// Rutas para curso
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/lstServiciosController');

// api/usuarios
router.post('/', lstServiciosController.crearlstServicios);
router.get('/', lstServiciosController.obtenerlstServicios);
router.put('/:id', lstServiciosController.actualizarlstServicios);
router.get('/:id', lstServiciosController.obtenerlstServicios);
router.delete('/:id', lstServiciosController.eliminarlstServicios);

module.exports = router;