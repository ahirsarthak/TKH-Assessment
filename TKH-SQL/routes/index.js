const Router = require("express");
const router = Router();
const models = require("../models/index.js");

router.get("/doctors", async (req, res) => {
  try {
    getAllDoc = await models.Doctors.findAll();
    res.status(200).json(getAllDoc);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
router.get("/patients", async (req, res) => {
  try {
    getAllPatient = await models.Patients.findAll();
    res.status(200).json(getAllPatient);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
router.post("/newDoctor", async (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    return await models.Doctors.create({
      name: body.name,
      email: body.email,
    }).then(function (results) {
      res.status(200).json(results);
    });
  } catch (error) {
    res.status(400).json("Error in inserting new record");
  }
});
router.post("/newPatient", async (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    return await models.Patients.create({
      name: body.name,
      email: body.email,
    }).then(function (results) {
      res.json(results);
    });
  } catch (error) {
    res.status(400).json("Error in inserting new  Patient record");
  }
});
router.put("/newDoctors", (req, res) => {
  try {
    let body = req.body;
    res
      .status(200)
      .json(
        async () =>
          await models.Doctors.update(
            { name: body.newName },
            { where: { name: body.name } }
          )
      );
  } catch (error) {
    res.status(400).json("Error on Put request");
  }
});
router.delete("/doctors", (req, res) => {
  try {
    let body = req.body;
    res
      .status(200)
      .send(
        async () => await models.Doctors.destroy({ where: { name: body.name } })
      );
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
module.exports = router;
