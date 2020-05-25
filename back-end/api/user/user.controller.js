const userService = require('./user.service')
const logger = require('../../service/logger.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.send(user)
}
  


module.exports = {
    getUser,
}