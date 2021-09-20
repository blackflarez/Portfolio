const express = require('express')
var path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.get('/', (request, response) => {
  response.render('home')
})

app.get('/jobspy', (request, response) => {
  response.render('jobspy')
})

const port = 3000
app.listen(port, () => console.log(`Started on port ${port}!`))
