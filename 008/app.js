const express = require("express");
const app = express();
const PORT = 3000;

const dbConnect = require("./config/dbConnect");

const router = express.Router();
const errorhandler = require("./middleware/errorhandler");

app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRouter"));

app.use(errorhandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
