require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path= require('path')

var postMessageRoutes = require('./controllers/postMessageController')


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(process.env.PORT || 4000,()=>console.log('Server started at : 4000'))


app.use('/postMessages',postMessageRoutes)