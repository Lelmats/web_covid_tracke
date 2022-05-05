const { appendFile } = require('fs');
const http = require('http');
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const hostname = 'localhost';
const port = 3001;
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    password: "",
    database: "covidtracker",
});

app.post("/register", (req, res) => {

    const username = req.body.username
    const apellido = req.body.apellido
    const password = req.body.password
    const email = req.body.email
    const phone = req.body.phone
    const description = req.body.description
    const status = req.body.status

    db.query(
      "INSERT INTO users (username, apellido, password, email, phone, description, status) VALUES (?,?,?,?,?,?,?)", 
      [username, apellido, password, email, phone, description, status], 
      (err, result) => {
        console.log(err);
      }
    ); 
});

app.post("/login", (req, res) => {

  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

  db.query(
    "SELECT * FROM users WHERE AND username = ? AND password =? AND email = ?" , 
    [username, password, email], 
    (err, result) => {
      if (err) {
        res.send({err: err});
      }
      
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Email o contraseña equivocado!"});
      }
    }
  ); 
});

app.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});