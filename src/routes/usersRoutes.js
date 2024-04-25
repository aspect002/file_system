const express = require("express");
const router = express.Router();
const UsersControllers = require('../controllers/usersControllers');

router.post('/', UsersControllers.createUser);
router.get('/',UsersControllers.getUsers)

module.exports = router;
