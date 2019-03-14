const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const postage_calculate = require('./controllers/calculate_postage.js')
const bodyParser = require('body-parser');
const db = require('./queries');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
  }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .post('/getRate', (req, res) => {
      res.render('pages/result', {result: postage_calculate.calculateRate(req)})}
  )
  .get('/', (req, res) => res.render('pages/index'))

  .get('/users/:id', db.getUsers)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
