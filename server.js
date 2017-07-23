var express = require('express'),
  app = express();

app.use(express.static('public'));

var db = require('./models');

var controllers = require('./controllers');


/* *********
  ROUTES
********* */

//API json view index
app.get('/api', controllers.api.index);

//Returns index page
app.get('/', function homepage (req, res){
  res.sendFile('views/index.html', {root: __dirname});
  console.log("directory is working");
});

//Albums
app.get('/api/albums', controllers.albums.index);

/* *********
 LISTENING
********* */
app.listen(process.env.PORT || 3000, function(){
  console.log('Express server is running on localhost: 3000/ is working');
});
