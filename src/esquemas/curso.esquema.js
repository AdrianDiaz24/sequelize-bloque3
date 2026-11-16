const { sequelize } = require('sequelize');

const  Curso = sequelize.define('Curso', {
  nombre: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {msg: 'El nombre no puede estar vacio'}}
  },
  horas: {
    type: sequelize.INTEGER,
    allowNull:false ,
    validate: {
      isInt: {msg: "Las horas deben ser un numero entero"},
      min: {args: [1], msg: "Las horas deben ser positivas"}
    }
  }
});


module.exports = Curso;
