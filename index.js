'use strict';

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

const auth = require('./lib/auth');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.redirect('/auth');
});

app.get('/auth', function(req, res) {
  res.status(200).send(auth.authPage());
});

app.get('/complete_auth', function(req, res) {
  auth.completeAuth(req.query.code)
    .then(function(body) {
      if(!body.ok) {
        res.status(403).send(`Authentication failed with error: ${body.error}`);
      } else {
        res.status(200).send('Authentication succeeded');
      }
    })
    .catch(function(err) {
      res.status(500).send(`Internal service error: ${err}`);
    });
});

app.listen(PORT, function () { console.log(`Listening on ${ PORT }`) });
