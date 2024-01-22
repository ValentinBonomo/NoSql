use('mflix');

// db.theaters.find({
//   $and: [
//     { "location.address.state": { $in: ["CA", "NY"] } },
//     { "capacity": { $gte: 500 } }
//   ]
// }).pretty();

db.theaters.find();