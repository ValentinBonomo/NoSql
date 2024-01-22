use('mflix');

//db.comments.find();

db.movies.find({ "tomatoes.viewer.rating": { $gte: 4 } }).pretty();