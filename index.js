const express = require('express');

const app = express();

const defaultRouter = require('./routes/default-routes')

app.engine('html', require('ejs').renderFile)

app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('assets'))

app.use('/', defaultRouter)

module.exports = app;