const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});

app.get("/contacts", (req, res) => {
  res.status(200).send("Contacts Page");
});

app.post("/contacts", (req, res) => {
  res.status(201).send("Create Contacts");
});

app.get("/contacts/:id", (req, res) => {
  res.status(200).send(`View Contacts ${req.params.id}`);
});

app.put("/contacts/:id", (req, res) => {
  res.status(200).send(`Update Contacts ${req.params.id}`);
});

app.delete("/contacts/:id", (req, res) => {
  res.status(200).send(`Delete Contacts ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
