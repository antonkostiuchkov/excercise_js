var Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();


var UrgentTask = function(name, priority){
    Task.call(this, name);
    this.priority = priority;
};
// We've created subObject, but we don't have access to prototype.
// ut.complete(); // won't work
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function(){
    console.log('NOtifying important people');
};
UrgentTask.prototype.save = function(){
    console.log('do special stuff before saving');
    this.notify();
    Task.prototype.save.call(this);
};

var ut = new UrgentTask('Urgent!!!', 2);
ut.complete();
ut.save();
console.log(ut);
console.log(myTask);
