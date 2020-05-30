const express = require("express");
require("./db/mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(userRoute);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
