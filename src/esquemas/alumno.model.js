const { z } = require('zod');

const esquemaAlumno = z.object({
  nombre: z.string({ required_error: 'El nombre es obligatorio' }).trim().min(1, 'El nombre no puede estar vacío'),
  email: z.string({ required_error: 'El email es obligatorio' }).trim().toLowerCase().email('El email no es válido')
});

module.exports = esquemaAlumno;
