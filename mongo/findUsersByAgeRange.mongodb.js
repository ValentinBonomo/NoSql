use('mflix');

db.movies.find({ "tomatoes.viewer.rating": { $gte: 4 , $lt: 6} }).pretty();