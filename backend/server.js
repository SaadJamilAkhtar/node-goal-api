const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()
const colors = require('colors')
const connectDB = require('./config/db')

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", require('./routes/goalRoutes'))
app.use("/api/users", require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port} ...`)
});
