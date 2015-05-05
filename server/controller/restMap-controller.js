var Rest = require('../models/rest');

module.exports.create = function (req, res){
	var rest = new Rest(req.body);
	rest.save(function (err,result){
		res.json(result);
	});
}

module.exports.list = function (req, res){
	Rest.find({}, function (err, results){
		res.json(results);
	});
}

module.exports.get = function (req, res){
	var city = req.param('city');
	Rest.find({"city":city}, function (err, results){
		res.json(results);
	});
}