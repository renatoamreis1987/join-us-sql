require("dotenv").config();
var faker = require("faker");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "join_us_app" // the name of your db
});

// SELECTING DATA
// var q = 'SELECT COUNT(*) AS total FROM users';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

// INSERTING DATA
// var q =
//   'INSERT INTO users (email) VALUES ("wyatt_the_dog@SpeechGrammarList.com")';
//
// connection.query(q, function(error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// INSERTING DATA TAKE 2

var person = {
  email: faker.internet.email(),
  created_at: faker.date.past()
};

var end_result = connection.query("INSERT INTO users SET ?", person, function(err, result) {
  if (err) throw err;
  console.log(result);
});

console.log (end_result.sql);

connection.end();
