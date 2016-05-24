//LISTS CONTROLLER

// GET /api/lists
function index(req, res) {
 db.List.find({}, function(err, allLists) {
   res.json(allLists);
 });
}

function create(req, res){
 db.List.create(req.body, function(err, list){
  if (err){console.log('lists create error!',err); }
  res.json(list);
  });
}

function show(req, res){
  db.List.findById(req.params.listId, function(err, foundList){
    if(err){console.log('list show error!',err); }
    res.json(foundList);
  });
}

function destroy(req, res){
  db.List.findOneAndRemove({_id: req.params.listId}, function(err, findList){
    res.json(foundList);
  });
}

function update(req, res){
  db.List.findById(req.params.listId, function(err, foundList){
    if(err){console.log('list update error!',err); }
    foundList.name = req.body.name;
    foundList.save(function(err, savedList){
      if(err){console.log('list update saved error', err); }
      res.json(savedList);
    });
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
