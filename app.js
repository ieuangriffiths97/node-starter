var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', urlencodedParser, function(req, res){
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});
/*
app.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('welcome, ' + req.body.username)
  });
*/
app.get('/profile/:name', function(req, res){

    var data = {
        age: 21,
        job: 'developer',
        hobbies: ['football', 'basketball', 'weight training', 'driving', 'music']
    };
    res.render('profile',{ person: req.params.name, data : data});
});

app.listen(3000);

