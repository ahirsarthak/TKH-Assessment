const Router = require("express");
const router = Router();
const models = require("../models/index.js");

router.get("/doctors", (req, res) => {
  res.status(200).send(async () => await models.Doctors.findAll());
});
router.get("/patients", (req, res) => {
  res.status(200).send(async () => await models.Patients.findAll());
});
router.post("/newDoctor", async (req, res) => {
  let body = req.body;
  console.log(body);
  return await models.Doctors.create({
    name: body.name,
    email: body.email,
  }).then(function (results) {
    if (results) {
      res.send(results);
    } else {
      res.status(400).send("Error in inserting new record");
    }
  });
});
router.post("/newPatient", async (req, res) => {
  let body = req.body;
  console.log(body);
  return await models.Patients.create({
    name: body.name,
    email: body.email,
  }).then(function (results) {
    if (results) {
      res.send(results);
    } else {
      res.status(400).send("Error in inserting new record");
    }
  });
});
router.patch("/newDoctors", (req, res) => {
  let body = req.body;
  res
    .status(200)
    .send(
      async () =>
        await models.Doctors.update(
          { name: body.newName },
          { where: { name: body.name } }
        )
    );
});
router.delete("/doctors", (req, res) => {
  let body = req.body;
  res
    .status(200)
    .send(
      async () => await models.Doctors.destroy({ where: { name: body.name } })
    );
});
module.exports = router;
