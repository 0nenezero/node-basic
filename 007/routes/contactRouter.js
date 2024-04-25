const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.status(200).send("Contacts Page");
  })
  .post((req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send(`A required value has not been entered.`);
    }
    res.status(201).send("Create Contacts");
  });

module.exports = router;

router
  .route("/:id")
  .get((req, res) => {
    res.status(200).send(`View Contacts ${req.params.id}`);
  })
  .put((req, res) => {
    res.status(200).send(`Update Contacts ${req.params.id}`);
  })
  .delete((req, res) => {
    res.status(200).send(`Delete Contacts ${req.params.id}`);
  });
