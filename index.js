const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
const cors = require("cors");
const app = express();
const port = 3030;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ info: "Node.js Express, and Postgres ApI" });
});

app.get("/projects", db.getProjects);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
