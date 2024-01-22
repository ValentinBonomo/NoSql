use('mflix');
db.movies.aggregate([
 { $match: { "title": "Gertie the Dinosaur" }},
 { $lookup: {
 from: "comments",
 localField: "_id",
 foreignField: "movie_id",
 as: "comments"
 }
 }
]).pretty();
