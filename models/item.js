
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
  item: String,
  quantity: Number
});

var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
