const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
    static associate(models) {
      Patients.hasMany(models.Doctors);
      Patients.hasMany(models.Appointments);
    }
  }
  Patients.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Patients",
    }
  );
  return Patients;
};
