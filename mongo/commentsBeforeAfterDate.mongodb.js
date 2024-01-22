use('mflix');

db.comments.find({ 
  $or: [
    { "date": { $lt: new Date('1979-07-06T20:36:21Z') } },
    { "date": { $gte: new Date('1979-07-06T20:36:21Z') } }
  ]
}).pretty();


// db.comments.find();