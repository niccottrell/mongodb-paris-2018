const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'parisLocal';
const collName = 'restaurants';

MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);

    const db = client.db(dbName);
    const coll = db.collection(collName);

    var doc = {
        "name": "Puce",
        "telephone": "0953482975",
        "site": "http://ilovepuce.com/",
        "location": {
            "type": "Point",
            "coordinates": [48.8834, 2.33761]
        },
        "cuisine": ["japonaise", "mexicaine", "française"],
        "menu": [
            {"desc": "Jambon Ibérique bellota bellota", "price": 13.0},
            {"desc": "Fromages", "price": 8.5}
        ]
    };

    coll.insert(doc)
        .then(
            function (result) {
                console.log('>> NEW DOC: ' + JSON.stringify(doc, null, 2));
            },
            function (err) {
                console.log('>> ERROR: ' + err.message);
            }
        );

    coll.createIndex({
        "location": "2dsphere",
        "cuisine": 1
    }, function (err, result) { // Callback
        console.log(result);
    });

});