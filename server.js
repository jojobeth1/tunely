var express = require('express'),
  app = express();

app.use(express.static('public'));


  // ROUTES

  app.get('/', function homepage (req, res){
    res.sendFile('views/index.html', {root: __dirname});
  });


app.listen(3000);
