var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.ejs', { link: 'home' }, { title: 'Welcome to my Portfolio' })
})

/* GET services. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Welcome to my Portfolio' })
})

/* GET contact. */
router.get('/contact', function (req, res, next) {
  res.render('contact.ejs', { link: 'contact' }, { title: 'Welcome to my Portfolio' })
})

module.exports = router
