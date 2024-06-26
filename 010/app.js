const express = require("express");
const PORT = 3000;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

// load public file
app.use(express.static("./public"));
app.use(methodOverride("_method"));

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
