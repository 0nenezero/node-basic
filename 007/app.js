const express = require("express");
const app = express();
const PORT = 3000;

const router = express.Router();

app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRouter"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
