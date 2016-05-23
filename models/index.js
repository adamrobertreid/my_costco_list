

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_costco_list");

var List = require('./list');

module.exports.List = List;
module.exports.Item = require('./item');
