var print = console.log;

const Event = require('events');
const Util = require('util');


var Person =  function(name){
        this.name = name;
}


Util.inherits(Person, Event.EventEmitter);

var james = new Person('James');
var mary = new Person('mary');
var mask = new Person('mask');


var people = [james,mary,mask];

people.forEach(function(person){
        person.on('speak', function(msg){
        console.log(person.name + ' said ' + msg);
        });
});

james.emit('speak', 'Wassup');
