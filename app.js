const express = require("express");
// const playerRoutes = require("./routes/playerRoutes");
const peopleRoutes = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/assets", express.static(__dirname + "/public"));

// Register toyRoutes under base URL "/api/v1/people"
app.use("/api/v1/people", peopleRoutes);

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
});
