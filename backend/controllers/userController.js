const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
// @desc    ADD User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please fill all fields")
    }

    // check if user exists
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists")
    }

    // hash password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({
        name: name,
        email: email,
        password: hashedPassword
    });
    if (user) {
        res.status(201);
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }
    res.status(400)
    throw new Error("Invalid User Data")
})

// @desc    Auth User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {

})

// @desc    Get User Data
// @route   POST /api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: "User Data"})
})

module.exports = {registerUser, loginUser, getMe}