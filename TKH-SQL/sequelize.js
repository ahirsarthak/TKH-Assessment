const Model = Sequelize.Model;
class User extends Model {}
User.init(
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
  },
  {
    sequelize,
    modelName: "user",
    // options
  }
);
// search for known ids
Project.findByPk(123).then((project) => {
  // project will be an instance of Project and stores the content of the table entry
  // with id 123. if such an entry is not defined you will get null
});

// search for attributes
Project.findOne({ where: { title: "aProject" } }).then((project) => {
  // project will be the first entry of the Projects table with the title 'aProject' || null
});
// Note: using `force: true` will drop the table if it already exists
User.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return User.create({
    firstName: "John",
    lastName: "Hancock",
  });
});

// Find all users
User.findAll().then((users) => {
  console.log("All users:", JSON.stringify(users, null, 4));
});

// Create a new user
User.create({ firstName: "Jane", lastName: "Doe" }).then((jane) => {
  console.log("Jane's auto-generated ID:", jane.id);
});

// Delete everyone named "Jane"
User.destroy({
  where: {
    firstName: "Jane",
  },
}).then(() => {
  console.log("Done");
});

// Change everyone without a last name to "Doe"
User.update(
  { lastName: "Doe" },
  {
    where: {
      lastName: null,
    },
  }
).then(() => {
  console.log("Done");
});
class Task extends Model {}
Task.init({ title: Sequelize.STRING }, { sequelize, modelName: "task" });

class User extends Model {}
User.init({ username: Sequelize.STRING }, { sequelize, modelName: "user" });

User.hasMany(Task); // Will add userId to Task model
Task.belongsTo(User); // Will also add userId to Task model
