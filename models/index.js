

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/angular_review");

var Person = require('./person');

module.exports.Person = Person;
