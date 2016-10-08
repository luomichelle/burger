/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burgermodel = {
	all: function (cb) {     
		orm.all('burgers', function (res) {
			cb(res);
			console.log("orm model ALL is working")
		});
	},
	// cols and vals are arrays
	create: function (column, values, cb) {
		orm.create('burgers',column,values, function (res) {
			cb(res);
			console.log("orm model CREATE is working")
		});
	},
	update: function (column, newValue, condition, cb) {
		orm.update('burgers', column, newValue, condition, function (res) {
			cb(res);
			console.log("orm model UPDATE is working")
		});
	},
	delete: function (condition, cb) {
		console.log("workings??")
		orm.delete('burgers',condition, function (res) {
			console.log("workings11111??")
			cb(res);
			console.log("orm model DELELTE is working")
		});
	}
};

//burgermodel.all(function(data){console.log(data)});
//burgermodel.create('burger_name',"yay",function(data){console.log(data)})
// burgermodel.update('devoured',0,'id=1', function(data){console.log(data)})
//burgermodel.delete('id=5',function(data){console.log(data)})

//TIPS:
//when you call cb don't forget cb is running as a function.



module.exports = burgermodel;