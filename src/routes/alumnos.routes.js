const express = require('express');
const validar = require('../middlewares/validar');
const esquemaAlumno = require('../esquemas/alumno.model');
const ErrorHTTP = require('../utils/ErrorHTTP');
const datos = require('../datos/almacen');

const router = express.Router();

// GET /alumnos
router.get('/', (req, res, next) => {
  try {
    res.json(datos.listarAlumnos());
  } catch (error) { next(error); }
});

// GET /alumnos/:id
router.get('/:id', (req, res, next) => {
  try {
    const alumno = datos.buscarAlumnoPorId(req.params.id);
    if (!alumno) throw new ErrorHTTP(404, 'Alumno no encontrado');
    res.json(alumno);
  } catch (error) { next(error); }
});

// POST /alumnos
router.post('/', validar(esquemaAlumno), (req, res, next) => {
  try {
    res.status(201).json(datos.crearAlumno(req.body));
  } catch (error) { next(error); }
});

// PUT /alumnos/:id
router.put('/:id', validar(esquemaAlumno), (req, res, next) => {
  try {
    const alumno = datos.actualizarAlumno(req.params.id, req.body);
    if (!alumno) throw new ErrorHTTP(404, 'Alumno no encontrado');
    res.json(alumno);
  } catch (error) { next(error); }
});

// DELETE /alumnos/:id
router.delete('/:id', (req, res, next) => {
  try {
    if (!datos.borrarAlumno(req.params.id)) throw new ErrorHTTP(404, 'Alumno no encontrado');
    res.status(204).send();
  } catch (error) { next(error); }
});

module.exports = router;
