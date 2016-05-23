
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Item = require('./item');

var ListSchema = new Schema({
  name: String,
  item: [Item.Schema]
});

var List = mongoose.model('List', ListSchema);

module.exports = List;
