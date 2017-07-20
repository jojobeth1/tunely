var express = require('express'),
  app = express();

app.use(express.static('public'));

var db = require('./models');

var controllers = require('./controllers');

app.get('/api', controllers.api.index);


  // ROUTES
  app.get('/', function homepage (req, res){
    res.sendFile('views/index.html', {root: __dirname});
  });


app.listen(3000);
