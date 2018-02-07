const express = require('express');
const expressHandlebars = require('express-handlebars');
const helpers = require('./helpers');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.engine('hbs', expressHandlebars({
  helpers: helpers
}));
app.set('view engine', 'hbs');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../../static')));

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
