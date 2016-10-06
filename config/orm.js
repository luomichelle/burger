/*
Here is the O.R.M. where you write functions 
that takes inputs and conditions and turn 
them into database commands like SQL.
*/
var connection = require('../config/connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

var orm = {
	all: function (table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	create: function (table,column,values,cb) {
		var columnString = column.toString();
		var valuesString = "'"+values +"'";
		var queryString = 'INSERT INTO ' + table + ' (' + columnString + ') ' + 'VALUES(' + "'" + values + "'" + ');'
		//TIPS:
		//mysql insert query: INSERT INTO [table] ([column], [column]) VALUES ('[value]', [value]');
		//'[value]' = "'" + value + "'";
		//string type needs " ", and input into mysql needs another "": which ""stringtype"
		console.log(queryString)

		connection.query(queryString, values, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		// objColVals would be the columns and values that you want to update
		// an example of objColVals would be {name: panther, sleepy: true}
	update: function  (table, column,newValue,condition, cb) {

		//UPDATE `burgers_db`.`burgers` SET `burger_name`='lz' WHERE `id`='5';

		var queryString = 'UPDATE ' + table + ' SET ' + column + '=' + newValue + ' WHERE ' + condition + ';'

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},


	delete: function (table, condition, cb) {
		var queryString = 'DELETE FROM ' + table;
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};


//orm.all('burgers', function(data){console.log(data);})
//orm.all('burgers', function(aaa){console.log(aaa);})
//orm.update('burgers','burger_name','"michelles farts"','id=1', function(data){console.log(data)})
//orm.update('burgers','devoured',5,'id=1', function(data){console.log(data)})
//orm.delete('burgers','id=5',function(data){console.log(data)})



module.exports = orm;
