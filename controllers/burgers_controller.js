/*
Here is where you create all the 
functions that will do the routing for your app, 
and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burgers = require('../models/burgermodel.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});


console.log(burgers);

router.get('/burgers', function (req, res) {
	burgers.all(function (data) {
		console.log(data)
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});



router.post('/burgers/create', function (req, res) {
	burger.create('burger_name', [req.body.name], function () {
		burger.redirect('/burgers');
	});
});



router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	//burgers.update({devoured: req.body.sleepy }, condition, function () {difference?
	burgers.update('devoured',req.body.devoured,condition, function () {

		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	cat.delete(condition, function () {
		res.redirect('/burgers');
	});
});
 
router.get(function (req, res) {  
	burgers.all(function(data){
		console.log(data)})
	});


module.exports = router;
