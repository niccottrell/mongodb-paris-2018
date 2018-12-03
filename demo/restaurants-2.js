const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'parisLocal';
const collName = 'restaurants';

MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);

    const db = client.db(dbName);
    const coll = db.collection(collName);

    var center = [2.337573, 48.8835];
    var radius = 0.0001569;

    coll.find({
        "location": {
            "$geoWithin": {
                "$centerSphere": [
                    center,
                    radius
                ]
            }
        },
        "cuisine": "japonaise"
    }).limit(10).toArray(function (err, docs) {
        console.log('>> RESULTAT: ' + JSON.stringify(docs, null, 2));
    });


});