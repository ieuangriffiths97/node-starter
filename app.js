var express = require('express');
var fs = require('fs');
var id = require('uniqid');
var app = express();



app.get('/', function (req, res) {
  var string = '\nadded text';
  res.send(string)
  // get all reps
  fs.appendFile('text.txt', string)
})

app.get('/read', function (req, res) {
  const file = fs.readFileSync('text.txt')
  res.send(file + ' and I am reading from it');
  //res.json()
  //res.sendFile('index.html')
});

app.get('/newGet/:rand/', function (req, res) {
  res.send(req.params.rand)
})
var number = 0;

app.post('/message/:message', function (req, res) {
  var message = req.params.message;
  number++;

  res.send(message + " " + number);

});

app.get('/message/:id', function (req, res) {
  var id = req.params.id
  if (id != typeof number) {
    res.send("ID has to  be a number")
  }

  const messages = fs.readFileSync('messages.txt')

});


app.put('/', function (req, res) {

})

app.delete('/delete', function (req, res) {
  fs.unlinkSync('text.txt')
  res.send("files deleted")
})


app.listen('9000', function () {
  console.log('Server listening on port 9000')
})
