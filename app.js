const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const configs = require("./config.js");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.set(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/people", routes);

mongoose.connect(configs.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
});
