const fs = require('fs')
const key = fs.readFileSync('./key.pem')
const cert = fs.readFileSync('./cert.pem')
const express = require('express')
const https = require('https')
var path = require('path')
const app = express()
const server = https.createServer({ key: key, cert: cert }, app)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.get('/', (request, response) => {
  response.render('home')
})

app.get('/jobspy', (request, response) => {
  response.render('jobspy')
})

app.get('/cubeclicker', (request, response) => {
  response.render('cubeclicker')
})

const port = 3000
app.listen(process.env.PORT || port)
