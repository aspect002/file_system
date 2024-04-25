const UsersServices = require('../services/usersServices');
const FileHelper = require('../helpers/fileHelper');

class UsersCountrollers {
  async getUsers(req, res) {
    const result = await UsersServices.getUsers();
    res.send(result)
  }
  async createUser(req, res) {
    const result = await UsersServices.createUser(req.body);
    //res.send(result);
    const result2 = await FileHelper.readFile('data.json')
    console.log(result2);
        //result2.push(req.body)
        res.send(result2);

  }
}

module.exports = new UsersCountrollers();
