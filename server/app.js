const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')

const keys = require('./config/keys')

//Routes
const authRoutes = require('./routes/auth')
const articlesRoutes = require('./routes/articles')
const profileRoutes = require('./routes/profile')

const app = express()

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch( error => {
        console.log(error)
    })

//Settings
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use('/uploads', express.static('uploads'))
require('./middleware/passport')(passport)

//Use route
app.use('/api/auth', authRoutes)
app.use('/api/articles', articlesRoutes)
app.use('/api/profile', profileRoutes)

module.exports = app