// LISTS ITEMS CONTROLLER

var db = require('../models');


function index(req, res) {
 db.List.findById(req.params.listId, function(err, foundList) {
   console.log('responding with grocery list for costco', foundList.items);
   res.json(foundList.items);
 });
}

function create(req, res){
 db.List.findById(req.params.listId, function(err, foundList){
  if (err){console.log('lists item create error!',err); }
    var newItem = new db.Item(req.body);
    foundList.items.push(newItem);
    foundList.save(function(err, savedList){
      res.json(newList);
    });
  });
}

function destroy(req, res){
  db.List.findById(req.arams.listId, function(err, foundList){
    var selectItem = foundList.item.id(req.params.itemId);
    if (selectItem) {
      selectItem.remove();
      foundList.save(function(err, savedList){
        console.log('REMOVED', selectItem.item, 'FROM', savedList.items);
        res.json(selectItem);
      });
    }else {
    res.send(404);
    }
  });
}

function update(req, res){
  db.List.findById(req.params.listId, function(err, foundList){
    var selectedItem = foundList.items.id(req.params.itemId);
    if (selectedItem) {
      selectItem.item = req.body.item;
      selectedItem.quantity = req.body.quantity;

      foundList.save(function(err, savedList){
        console.log('UPDATED', selectedItem.item, 'FROM', savedList.items);
        res.json(selectedItem);
      });
    } else {
      res.send(404);
    }
  });
}

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  update: update
};
