use('mflix');
db.movies.find({ "tomatoes.viewer.rating": { $eq: 4.7 } }).pretty();