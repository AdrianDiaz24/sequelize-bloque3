const {DataTypes} = require('sequelize');
const sequelize = require('src/db/database')

const Alumno = sequelize.define('Alumno', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {msg: 'El nombre no puede estar vacio'},
      notNull: {msg: "El nombre es obligatorio"}
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail:{msg: "El email no es valido"},
      notNull: {msg: "El email es obligatorio"}
    }
  }
})

module.exports = Alumno;
