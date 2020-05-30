const mongoose = require("mongoose");
// CONNECT TO DB
mongoose.connect("mongodb://127.0.0.1/playground_2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.connection
  .once("open", () => console.log("succesfully connected to database"))
  .on("error", error => console.log(error));
