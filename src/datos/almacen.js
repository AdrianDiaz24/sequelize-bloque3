// Capa de acceso a datos: las rutas NUNCA tocan los arrays directamente.
// En el bloque 3 este archivo se sustituye por consultas a la base de datos
// y las rutas apenas cambian.
let cursos = [
  { id: 1, nombre: 'Desarrollo web en entorno servidor', horas: 160 }
];
let alumnos = [
  { id: 1, nombre: 'Lucía Romero', email: 'lucia@ejemplo.com' }
];

const siguienteId = lista => Math.max(0, ...lista.map(x => x.id)) + 1;

// ---------- Cursos ----------
function listarCursos() {
  return cursos;
}

function buscarCursoPorId(id) {
  return cursos.find(c => c.id === Number(id));
}

function crearCurso(datos) {
  const nuevo = { id: siguienteId(cursos), ...datos };
  cursos.push(nuevo);
  return nuevo;
}

function actualizarCurso(id, datos) {
  const curso = buscarCursoPorId(id);
  if (!curso) return null;
  Object.assign(curso, datos);
  return curso;
}

function borrarCurso(id) {
  const curso = buscarCursoPorId(id);
  if (!curso) return false;
  cursos = cursos.filter(c => c.id !== curso.id);
  return true;
}

// ---------- Alumnos ----------
function listarAlumnos() {
  return alumnos;
}

function buscarAlumnoPorId(id) {
  return alumnos.find(a => a.id === Number(id));
}

function crearAlumno(datos) {
  const nuevo = { id: siguienteId(alumnos), ...datos };
  alumnos.push(nuevo);
  return nuevo;
}

function actualizarAlumno(id, datos) {
  const alumno = buscarAlumnoPorId(id);
  if (!alumno) return null;
  Object.assign(alumno, datos);
  return alumno;
}

function borrarAlumno(id) {
  const alumno = buscarAlumnoPorId(id);
  if (!alumno) return false;
  alumnos = alumnos.filter(a => a.id !== alumno.id);
  return true;
}

module.exports = {
  listarCursos, buscarCursoPorId, crearCurso, actualizarCurso, borrarCurso,
  listarAlumnos, buscarAlumnoPorId, crearAlumno, actualizarAlumno, borrarAlumno
};
