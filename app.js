var events = require('events');

var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var ieuan = new Person('ieuan');
var kenny = new Person('kenny');
var tom = new Person('tom');

var people = [ieuan,kenny,tom];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg);
    })
})

ieuan.emit('speak', 'hello');
kenny.emit('speak', 'i am hungry')