const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const ROOT_ID = process.env.root_id;
const ROOT_PASSWORD = process.env.root_password;
const bodyParser = require("body-parser");

console.log(ROOT_ID);

console.log(ROOT_PASSWORD);
const db = mysql.createPool({
  host: "localhost",
  user: ROOT_ID,
  password: ROOT_PASSWORD,
  database: "gkseogusblog",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));

// api
app.get("/api/list", (req, res) => {
  const sqlQuery = "SELECT *FROM BOARD;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
  console.log(res);
});

app.post("/api/insert", (req, res) => {
  var title = req.body.title;
  var register = req.body.register;
  var content = req.body.content;
  const sqlQuery =
    "INSERT INTO BOARD (BOARD_TITLE, REGISTER_ID, BOARD_CONTENT) VALUES (?,?,?);";
  db.query(sqlQuery, [title, register, content], (err, result) => {
    res.send(result);
    console.log(result);
    console.log("title:", title, "register:", register, "content:", content);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
