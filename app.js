var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

readStream.on('data', function(chunk){
console.log('new chunck recieved');
console.log(chunk);
});

/*
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('hello');
    
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
*/
