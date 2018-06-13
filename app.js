var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/application/json', 'utf8');
    var myObject = {
        name: 'ieuan',
        job: 'developer',
        age: 21
    };
    res.end(JSON.stringify(myObject));    
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');

