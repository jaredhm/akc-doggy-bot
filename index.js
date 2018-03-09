const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Foo!');
});

app.listen(PORT, function () { console.log(`Listening on ${ PORT }`) });
