const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Type = require("./Type");

const Pokemon = sequelize.define(
  "Pokemons",
  {
    id: {
      type: DataTypes.UUID(),
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.STRING,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
);

// Associations
Pokemon.belongsToMany(Type, { through: "pokemon_type", timestamps: false });
Type.belongsToMany(Pokemon, { through: "pokemon_type", timestamps: false });

module.exports = Pokemon