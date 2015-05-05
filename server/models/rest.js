var mongoose = require('mongoose');

module.exports = mongoose.model('cities', {
	open: Boolean,
	city: String,
	stars: Number,
	business_id: String,
	longitude: Number,
	hours: Array,
	full_address: String,
	rest_id: Number,
	type: String,
	latitude: Number,
	attribute: Array,
	name: String,
	review_count: Number,
	categories: String,
	state: String,
	neighborhoods: Array
}, 'cities');