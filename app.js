require("dotenv").config(); // importante instalar por el env keys
let express = require("express");
let mysql = require("mysql");
let bodyParser = require("body-parser"); // importante para obtener la info del form
let app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true })); // to inform express that we use body-parser
app.use(express.static(__dirname + "/public")) // this is for CSS

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "join_us_app" // the name of your db
});

app.get("/", function(req, res) {
  // Find count of users in DB
  let q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function(err, results) {
    if (err) throw err;
    let count = results[0].count;
    res.render("home", { data: count });
  });
});

app.post("/register", function(req, res) {
  let person = {
    email: req.body.email
  };
  connection.query("INSERT INTO users SET ?", person, function(err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.get("/joke", function(req, res) {
  let joke = "A <strong>joke</strong> <em>here....</em>";
  res.send(joke);
});

app.get("/random_num", function(req, res) {
  let num = Math.floor(Math.random() * 10 + 1);
  res.send("Your lucky number is " + num);
});

app.listen(8080, function() {
  console.log("App listening on port 8080!");
});

// and it works on localhost:8080
