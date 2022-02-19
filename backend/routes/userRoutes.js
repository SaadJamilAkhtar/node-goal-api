const express = require('express')
const router = express.Router()
const controller = require("../controllers/userController")
const protect = require('../middleware/authMiddleware')
router.post('/', controller.registerUser);
router.post('/login', controller.loginUser);
router.get('/me', protect, controller.getMe)


module.exports = router