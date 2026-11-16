const express = require('express');
const validar = require('../middlewares/validar');
const esquemaCurso = require('../esquemas/curso.esquema');
const ErrorHTTP = require('../utils/ErrorHTTP');
const datos = require('../datos/almacen');

const router = express.Router();

// GET /cursos
router.get('/', (req, res, next) => {
  try {
    res.json(datos.listarCursos());
  } catch (error) { next(error); }
});

// GET /cursos/:id
router.get('/:id', (req, res, next) => {
  try {
    const curso = datos.buscarCursoPorId(req.params.id);
    if (!curso) throw new ErrorHTTP(404, 'Curso no encontrado');
    res.json(curso);
  } catch (error) { next(error); }
});

// POST /cursos
router.post('/', validar(esquemaCurso), (req, res, next) => {
  try {
    res.status(201).json(datos.crearCurso(req.body));
  } catch (error) { next(error); }
});

// PUT /cursos/:id
router.put('/:id', validar(esquemaCurso), (req, res, next) => {
  try {
    const curso = datos.actualizarCurso(req.params.id, req.body);
    if (!curso) throw new ErrorHTTP(404, 'Curso no encontrado');
    res.json(curso);
  } catch (error) { next(error); }
});

// DELETE /cursos/:id
router.delete('/:id', (req, res, next) => {
  try {
    if (!datos.borrarCurso(req.params.id)) throw new ErrorHTTP(404, 'Curso no encontrado');
    res.status(204).send();
  } catch (error) { next(error); }
});

module.exports = router;
