const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,      
      defaultValue: DataTypes.UUIDV4,    
      allowNull: false,
      primaryKey : true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull:false,
    },
    health_score: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      }
    },
    step_by_step:{
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    createdInDb:{                                 
      type : DataTypes.BOOLEAN,                    
      allowNull: false,
      defaultValue: true
    },
  },
  {
    timestamps: false,
  }
);
};