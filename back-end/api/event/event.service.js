
const dbService = require('../../service/db.service');
const ObjectId = require('mongodb').ObjectId;


module.exports = {
    query,
    getById,
    update,
    add
}

function _buildCriteria(filterBy) {
    
    if(!filterBy.title &&  !filterBy.isFree && !filterBy.category && !filterBy.thisMonth){
       return filterBy;
    }
    const criteria = { $and: []};
    if (filterBy.title) {
        
        criteria.$and.push({ $or: [{ title: {'$regex': filterBy.title, '$options': 'i'}}, { desc: {'$regex': filterBy.title, '$options': 'i'}}, { place: {'$regex': filterBy.title, '$options': 'i'}}]});
  
     
    }
    if (filterBy.category) {
        criteria.$and.push({ category: {'$regex': filterBy.category, '$options': 'i'}})
        
    }
    if (filterBy.isFree) {
        criteria.$and.push({ price:  {$eq: 0}})
        
    }
    if (filterBy.thisMonth) {
    
        const wantedDate = Date.now() + 2678400000;
        criteria.$and.push({ startAt : {$lt: wantedDate}});
    }

    console.log('criteria', criteria)
    return criteria;
}


async function query(filterBy) {
    const filter = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('event');

    try {
        let events = await collection.find(filter).toArray();
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


async function add(event) {

    const collection = await dbService.getCollection('event')
    try {
        await collection.insertOne(event);
        console.log('*************************************************************' , event)
        return event;
    } catch (err) {
        console.log(`ERROR: cannot insert event`)
        throw err;
    }
}







