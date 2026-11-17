const Curso = require('./curso.model')
const Alumno = require('./alumno.model')

Curso.hasMany(Alumno)
Alumno.belongsTo(Curso)

module.exports = {Curso, Alumno}