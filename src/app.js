const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger');
const manejadorErrores = require('./middlewares/manejadorErrores');
const ErrorHTTP = require('./utils/ErrorHTTP');
const {sequelize} = require('sequelize');

const app = express();

// 1. Middleware globales, en este orden
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(logger);
app.use(express.json());

// 2. Routers de cada recurso
app.use('/cursos', require('./routes/cursos.routes'));
app.use('/alumnos', require('./routes/alumnos.routes'));



// 3. Cualquier otra ruta: 404
app.use((req, res, next) => {
  next(new ErrorHTTP(404, `No existe la ruta ${req.method} ${req.originalUrl}`));
});

// 4. Manejo de errores centralizado: SIEMPRE el último
app.use(manejadorErrores);

module.exports = app;
