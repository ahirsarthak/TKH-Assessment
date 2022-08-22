"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    static associate(models) {
      Doctors.hasMany(models.Appointments);
      Doctors.hasMany(models.Patients);
    }
  }
  Doctors.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Doctors",
    }
  );

  return Doctors;
};
