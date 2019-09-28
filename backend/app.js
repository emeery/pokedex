var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
require('./src/db/mongo')

const pokemonRouter = require('./src/controllers/pokemon')
var app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use("/images", express.static(path.join(__dirname, "/images")))



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use('/pokemon', pokemonRouter)

app.listen(8090, function () {
  console.log('servidor_up ...')
});
