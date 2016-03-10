var Task = require('./task');

var task1 = new Task('run');
var task2 = new Task('read');
console.log(task1.completed);
task1.complete();
task1.save();
console.log(task1.completed);