const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'parisLocal';
const collName = 'staff';

MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);

    const db = client.db(dbName);
    const coll = db.collection(collName);

    var doc = {
        "nom": "Jean Leblanc",
        "titre": "Chef superstar",
        "telephones": ["0123456789", "063456789"],
        "commence": new Date(2016, 10, 5), // 10 = novembre
        "bureau": {
            "ville": "Paris",
            "lieu": {
                type: "Point",
                coordinates: [2.3333, 48.86]
            }
        },
        "equipe": [{"id": 189, "nom": "Camille Martin"},
            {"id": 256, "nom": "Maxime Lefevre"}]
    };

    coll.insert(doc)
        .then(
            function (result) {
                console.log('>> NEW DOC: ' + JSON.stringify(doc, null, 2));
            },
            function (err) {
                console.log('>> ERROR: ' + err.message);
            }
        )

});