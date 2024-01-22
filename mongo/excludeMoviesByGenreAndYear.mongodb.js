use('mflix');

db.movies.find({ 
    $nor: [
      { "genres": "Action"  },
      { "year": { $gte: 1990, $lte: 2000 } }
    ]
  }).pretty();

// db.movies.find();