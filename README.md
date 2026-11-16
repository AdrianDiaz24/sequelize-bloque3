# API de Cursos y Alumnos

API REST en memoria (cierre del bloque 2). Los datos se pierden al reiniciar el servidor.

## Arranque

1. `npm install`
2. Crear un archivo `.env` con `PORT=3000`
3. `npm run dev`

URL base: `http://localhost:3000`. CORS habilitado para `http://localhost:4200`.

## Rutas

| Método | Ruta | Body | Éxito | Errores |
|---|---|---|---|---|
| GET | /cursos | - | 200 + array | - |
| GET | /cursos/:id | - | 200 + curso | 404 |
| POST | /cursos | `{ nombre, horas }` | 201 + curso creado | 400 |
| PUT | /cursos/:id | `{ nombre, horas }` | 200 + curso | 400, 404 |
| DELETE | /cursos/:id | - | 204 | 404 |
| GET | /alumnos | - | 200 + array | - |
| GET | /alumnos/:id | - | 200 + alumno | 404 |
| POST | /alumnos | `{ nombre, email }` | 201 + alumno creado | 400 |
| PUT | /alumnos/:id | `{ nombre, email }` | 200 + alumno | 400, 404 |
| DELETE | /alumnos/:id | - | 204 | 404 |

## Formato de los errores

- 400 (validación): `{ "errores": ["mensaje 1", "mensaje 2"] }`
- 404 y 500: `{ "error": "mensaje" }`
