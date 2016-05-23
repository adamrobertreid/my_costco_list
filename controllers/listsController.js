

// GET /api/lists
function index(req, res) {
 db.list.find({}, function(err, allLists) {
   res.json(allLists);
 });
}

module.exports = {
  index: index
};
