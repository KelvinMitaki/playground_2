const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users");

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoute);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

// CONNECT TO DB
mongoose.connect("mongodb://127.0.0.1/playground_2", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection
  .once("open", () => console.log("succesfully connected to database"))
  .on("error", error => console.log(error));
