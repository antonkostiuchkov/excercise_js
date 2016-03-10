var Task = require('./task');
var Repo = require('./taskRepository');


// var task1 = new Task('run');
var task1 = new Task(Repo.get(1));
var task2 = new Task('read');
console.log(task1.completed);
task1.complete();
task1.save();
console.log(task1.completed);

