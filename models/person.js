
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var PersonSchema = new Schema({
 name: String,
 age: Number
});

var Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
