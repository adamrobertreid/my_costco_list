

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

module.exports = {
  index: index,
  create: create,
  show: show
};
