

// GET /api/albums
function index(req, res) {
 db.Person.find({}, function(err, allPersons) {
   res.json(allPersons);
 });
}

module.exports = {
  index: index
};
