// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/api/albums', controllers.albums.create);
/* *********
 LISTENING
********* */
app.listen(process.env.PORT || 3000, function(){
  console.log('Express server is running on localhost: 3000/ is working');
});
