const express = require('express');
const keys = require('./config/keys')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

require('./model/User')
require('./model/Book')
require('./services/passport')

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongoUri)

require('./router/authRoutes')(app)
require('./router/bookRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT)