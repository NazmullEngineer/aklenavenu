require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


var postMessageRoutes = require('./controllers/postMessageController')

var app = express()
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}

app.use(cors({origin:'http://localhost:3000'}))
app.listen(process.env.PORT || 4000,()=>console.log('Server started at : 4000'))


app.use('/postMessages',postMessageRoutes)