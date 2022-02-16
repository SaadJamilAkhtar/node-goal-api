const asyncHandler = require('express-async-handler')
// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {

})

// @desc    Add Goals
// @route   POST /api/goals
// @access  Private
const postGoal = asyncHandler(async (req, res) => {

})

// @desc    Update Goals
// @route   PUT /api/goals/{id}
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {

})

// @desc    Delete Goals
// @route   DELETE /api/goals/{id}
// @access  Private
const delGoal = asyncHandler(async (req, res) => {

})

module.exports = {getGoals, postGoal, updateGoal, delGoal}