const express = require('express')
const path = require('path')
const app = express()
const request = require('request');

app.use(express.static(path.join(__dirname,'..', 'dist')))
app.use(express.static(path.join(__dirname,'..', 'node_modules')))


app.get('/sanity', function(req,res){
    res.send("ok")
})

app.get('/recipes/:ingredient', function(req,res){
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err,response){
    res.send(JSON.parse(response.body))
    })
})







const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
