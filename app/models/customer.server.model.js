'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		required: '',
		trim: true
	},
	surname: {
		type: String,
		default: '',
		required: '',
		trim: true
	},
	subeurb: {
		type: String,
		default: '',
		required: '',
		trim: true
	},
	country: {
		type: String,
		default: '',
		required: '',
		trim: true
	},
	industry: {
		type: String,
		default: '',
		required: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		required: '',
		trim: true
	},
	phone: {
		type: String,
		default: '',
		required: '',
		trim: true
	},
	referred: {
		type: boolean
	},
	channel: {
		type: String,
		default: '',
		required: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Customer', CustomerSchema);
