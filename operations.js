const assert = require('assert');

exports.findDocuments = async (db, collectionDoc, callback) => {
    const collect = db.collection(collectionDoc);

    return await collect.find({}).toArray();

};

exports.insertDocument = async (db, documentQ, collectionDoc) => {

    const collect = db.collection(collectionDoc);
    return await collect.insertOne(documentQ);
};


exports.removeDocument = async (db, documentQ, collectionDoc) => {
    const collect = db.collection(collectionDoc);
    return await collect.deleteOne(documentQ);
};

exports.updatesDocument = async (db, documentQ, update, collectionDoc) => {
    const collect = db.collection(collectionDoc);
    return await collect.updateOne(documentQ, { $set: update }, null);


};
