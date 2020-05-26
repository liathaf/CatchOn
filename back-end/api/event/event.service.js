
const dbService = require('../../service/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    update,
}

function _buildCriteria(filterBy) {
    
    const criteria = {};
    if (filterBy.title) {
        criteria.title =  {'$regex': filterBy.title, '$options': 'i'}
        // criteria.desc =  {'$regex': filterBy.title, '$options': 'i'}
        // criteria.place =  {'$regex': filterBy.title, '$options': 'i'}
    }
    if (filterBy.category) {
        criteria.category =  filterBy.category
    }
    if (filterBy.isFree) {
        criteria.price = {$eq: 0}
    }
    if (filterBy.thisMonth) {
        criteria.startAt = {$eq: 0}
    }
    
    return criteria;
}


async function query(filterBy) {
    const filter = _buildCriteria(filterBy)
   
    const collection = await dbService.getCollection('event');

    try {
        let events = await collection.find(filter).toArray();
        console.log(events.length)
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







