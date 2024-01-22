use('mflix');
db.movies.updateOne(
{ "title": "Gertie the Dinosaur" },
{ $set: { "year": 2024 } }
);
db.movies.find({ "title": "Gertie the Dinosaur" }).pretty();