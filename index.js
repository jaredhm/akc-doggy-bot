'use strict';

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

const auth = require('./lib/auth');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Foo!');
});

app.get('/auth', function(req, res) {
  res.status(200).send(auth.getAuthPage());
});

app.listen(PORT, function () { console.log(`Listening on ${ PORT }`) });
