use ('mflix');
db.movies.find({
 $and: [
 { "genres": "Drama" },
 { "imdb.rating": { $gte: 8 } }
 ]
}).pretty();