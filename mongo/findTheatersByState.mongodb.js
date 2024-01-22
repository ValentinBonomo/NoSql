use('mflix');
db.theaters.find({ "location.address.state": "CA" }).pretty();