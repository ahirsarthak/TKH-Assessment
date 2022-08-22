const Sequelize = require("sequelize");
const express = require("express");
const app = express();
const static = express.static(__dirname + "/public");
const configRoutes = require("./routes/index.js");
app.use;
app.use("/public", static);
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use("/", configRoutes);
// sedn 404 error if route not found
app.use((req, res) => {
  res.status(404).send("404: page not found");
});

//configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});

// Option 2: Passing a connection URI
const sequelize = new Sequelize("pitcher99", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Success!");
  })
  .catch((err) => {
    console.log(err);
  });
