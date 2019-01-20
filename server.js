var express = require('express')
var ejs = require('ejs')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var mainRoutes = require('./routes/main')


var app = express()

let url = process.env.DATABASEURL || "mongodb://localhost/pagination"
mongoose.connect(url, { useNewUrlParser: true } );

// mongodb+srv://bradrar:<PASSWORD>@titacluster-n7xfk.mongodb.net/test?retryWrites=true
// mongodb://localhost/pagination

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(mainRoutes)

app.set('view engine', 'ejs')

app.listen(8080, function() {
    console.log('Node.js listening on port ' + 8080)
})

