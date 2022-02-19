const express = require('express')
const router = express.Router()
const controller = require('../controllers/goalController')
const protect = require('../middleware/authMiddleware')

router.route("/").get(protect, controller.getGoals).post(protect, controller.postGoal)

router.route("/:id").put(protect, controller.updateGoal).delete(protect, controller.delGoal)

module.exports = router