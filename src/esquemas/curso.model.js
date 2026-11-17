const {DataTypes} = require('sequelize');
const sequelize = require('src/db/database');


const  Curso = sequelize.define('Curso', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {msg: 'El nombre no puede estar vacio'},
      notNull: {msg: "Debes especificar el nombre del curso"}
    }
  },
  horas: {
    type: DataTypes.INTEGER,
    allowNull:false ,
    validate: {
      isInt: {msg: "Las horas deben ser un numero entero"},
      min: {args: [1], msg: "Las horas deben ser positivas"},
      notNull: {msg: "Debes indicar el numero de horas"}
    }
  }
});


module.exports = Curso;
