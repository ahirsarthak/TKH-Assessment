const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    static associate(models) {
      // define association here
      Appointments.belongsTo(models.Doctors);
      Appointments.belongsTo(models.Patients);
    }
  }
  Appointments.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Appointments",
    }
  );
  return Appointments;
};
