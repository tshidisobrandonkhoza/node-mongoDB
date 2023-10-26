const { MongoClient } = require('mongodb');
const dbOps = require('./operations');
const assert = require('assert');
const { log, error } = require('console');

const uri = "mongodb://127.0.0.1:27017";



const client = new MongoClient(uri);
async function run() {

    const database = client.db("new_database");

    console.log('Before inserting:\n')

    await dbOps.insertDocument(database,
        { name: "Ovacado", desc: "This is a sample" },
        'dishes'
    ).then((results) => {
        console.log(results);

        return dbOps.insertDocument(database,
            { name: "Oranges", desc: "This is a sample" },
            'dishes');

    }).then((results) => {
        console.log(results);
        return dbOps.updatesDocument(database,
            { name: "Oranges" },
            { desc: "I have been updated" },
            'dishes');
    }).then((results) => {

        console.log(results);
        return dbOps.removeDocument(database,
            { name: "Ovacado", desc: "This is a sample" },
            'dishes');
    }).then((results) => {
        console.log(results);

        return client.close();
    }).catch(err => {
        console.log(err);

    });


}

run();

