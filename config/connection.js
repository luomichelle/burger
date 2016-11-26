var mysql = require('mysql');
var connection;

// if(process.env.JAWSDB_URL) {
// 	connection = new Sequelize(process.env.JAWSDB_URL);
// }else{
// 	connection =new Sequelize('burgers_db','root','guagua',{
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	port:'3306'
// 	})
// }



var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'guagua',
	database: 'burgers_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Connection Sucessful! and connected as id ' + connection.threadId);
});

module.exports = connection;