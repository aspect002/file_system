const FileHelper = require('../helpers/fileHelper')

class UsersServices {
    #users = []
    getUsers() {
        return FileHelper.readFile('data.json')
    }
    async createUser(result) {
        return await FileHelper.writeFile('data.json', result)
    }
}
module.exports = new UsersServices()
