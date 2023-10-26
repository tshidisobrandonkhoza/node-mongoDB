const { MongoClient } = require('mongodb');
const dbOps = require('./operations');
const assert = require('assert');
const { log, error } = require('console');

const uri = "mongodb://127.0.0.1:27017";



const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db("sample_database");
        // const collect = database.collection("dishes");

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
            dbOps.removeDocument(database,
                { name: "Ovacado", desc: "This is a sample" },
                'dishes');
        }).then((results) => {
            console.log(results);

        }).catch(err => {
            console.log(err);
            
            

        });






        // const foundData = await dbOps.findDocuments(database,
        //     'dishes');

        // console.log(`After inserted: ${JSON.stringify(foundData)}`)



        //sample code
        // const query = { title: 'sample_title' }
        // const collectResults = await collect.findOne(query);

        //sample code
        // const doc = {
        //     title: "Sample Title",
        //     content: "Sample content"
        // }

        // const docResults = await collect.insertOne(doc);
        // console.log(`Inserted Data`);



    } finally {

        // await client.close();

    }
}

run().catch(console.dir);

