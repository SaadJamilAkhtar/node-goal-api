const express = require('express')
const router = express.Router()
const controller = require("../controllers/userController")

router.post('/', controller.registerUser);
router.post('/login', controller.loginUser);
router.get('/me', controller.getMe)



module.exports = router