
const dbService = require('../../service/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {

    getById,
    add,
    getByEmail
}




async function getById(userId) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ "_id": ObjectId(userId) })
        delete user.password
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}


async function add(user) {
    const collection = await dbService.getCollection('user');
    user.rank = 0;
    user.attendedEvents = [];
    user.isAdmin = false
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}


async function getByEmail(email) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({email})
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${email}`)
        throw err;
    }
}





