use('mflix');
db.movies.find({ "year": { $gt: 2000, $lt: 2010 } }).pretty();