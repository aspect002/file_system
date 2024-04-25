const UsersServices = require('../services/usersServices');

class UsersCountrollers {
  async getUsers(req, res) {
    const result = await UsersServices.getUsers();
    res.send(result)
  }
  createUser(req, res) {
    const result = UsersServices.createUser(req.body);
    res.send(result);
  }
}

module.exports = new UsersCountrollers();
