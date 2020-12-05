const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://NazmullEngineer:DxDv84Cw0d9CiDhj@cluster0.qidr1.mongodb.net/postManagerDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })
