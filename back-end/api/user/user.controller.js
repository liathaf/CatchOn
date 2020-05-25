const userService = require('./user.service')
const logger = require('../../service/logger.service')

async function getUser(req, res) {
    const userId = req.params.userId;
    const user = await userService.getById(userId)
    res.send(user)
}
  


module.exports = {
    getUser,
}