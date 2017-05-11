var mysql = require("mysql");
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'root',
// 	database:'burgers_db'
// });

var connection = mysql.createConnection({
	host:'us-cdbr-iron-east-03.cleardb.net',
	user:'bf473e41a54cce',
	password:'6dfce0eb',
	database:'heroku_636a1695fd93986'
});

connection.connect(function(err){
	if(err) throw err;
});

module.exports = connection;
