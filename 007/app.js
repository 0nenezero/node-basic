const express = require("express");
const app = express();
const PORT = 3000;

const router = express.Router();

app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});

router
  .route("/contacts")
  .get((req, res) => {
    res.status(200).send("Contacts Page");
  })
  .post((req, res) => {
    res.status(201).send("Create Contacts");
  });

router
  .route("/contacts/:id")
  .get((req, res) => {
    res.status(200).send(`View Contacts ${req.params.id}`);
  })
  .put((req, res) => {
    res.status(200).send(`Update Contacts ${req.params.id}`);
  })
  .delete((req, res) => {
    res.status(200).send(`Delete Contacts ${req.params.id}`);
  });

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
