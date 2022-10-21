const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();
const mariadb = require("mysql");
const PORT = process.env.port || 8000;
const ROOT_ID = process.env.root_id;
const ROOT_PASSWORD = process.env.root_password;
const bodyParser = require("body-parser");

const db = mariadb.createPool({
  host: "localhost",
  user: ROOT_ID,
  password: ROOT_PASSWORD,
  database: "gkseogusblog",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));

// board api
app.get("/api/boardList", (req, res) => {
  const sqlQuery = "SELECT *FROM BOARD;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
  console.log(res);
});

app.post("/api/boardInsert", (req, res) => {
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

// notice api
app.get("/api/noticeList", (req, res) => {
  const sqlQuery = "SELECT *FROM NOTICE;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
  console.log(res);
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
