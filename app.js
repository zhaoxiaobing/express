var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var multer = require('multer');


var app = express();


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  /*res.type('text/plain');
  res.send('Meadowlark Travel');*/
  res.render('index',{title:'xiaobing'});
});

var fortunes = [
  'Conquer your fears or they will conquer you.',
  'Rivers need springs.',
  'Do not fear what you don`t know.',
  'You will have a pleasant surprise.',
  'Whenever possible, keep it simple.'
];

app.get('/about', (req, res) => {
  /*res.type('text/plain');
  res.send('About Meadowlark Travel');*/
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  console.log(fortunes,randomFortune);
  res.render('about',{fortune: randomFortune});
});

//定制404页面
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {message: err.message, error: {}});
});


app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});