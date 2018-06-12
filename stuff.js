var counter = function(arr){
return "there are " + arr.length + " elements in this array"
};

var adder = function(a,b){
return `The sum of the two numbers is ${a+b}`;
};


var pi = 3.142;

/*
module.exports.counter = counter;

module.exports.adder = adder;

module.exports.pi = pi;
*/

// or

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};


// or
/* 

module.exports.adder = function(a,b){
return 'the sum of the two numbers is ${a+b};`
}
module.exports.pi = 3.142;
*/





