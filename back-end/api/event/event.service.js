
const dbService = require('../../service/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    update,
}

async function query(filterBy) {

    const collection = await dbService.getCollection('event');
    try {
        const events = await collection.find(filterBy).toArray();
        return events;
    } catch (err) {
        console.log('ERROR: cannot find events');
        throw err;
    }
}

async function getById(eventId) {

    const collection = await dbService.getCollection('event');
    try {
        const event = await collection.findOne({ "_id": ObjectId(eventId) });
        return event;
    } catch (err) {
        console.log('ERROR: cannot find event');
        throw err;
    }
}

async function update(event) {
    const collection = await dbService.getCollection('event');
    event._id = ObjectId(event._id);
    try {
        await collection.replaceOne({ "_id": event._id }, { $set: event });
        return event;
    } catch (err) {
        console.log(`ERROR: cannot update event ${event._id}`);
        throw err;
    }
}







