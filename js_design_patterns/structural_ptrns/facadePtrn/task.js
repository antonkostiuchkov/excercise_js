var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

var TaskService = function () {

    var complete = function (task) {
        task.completed = true;
        console.log('Completing task ' + task.name);
    };

    var setComleteDate = function (task) {
        task.completedDate = new Date();
        console.log(task.name + ' completed on ' + task.completedDate);
    };

    var notifyCompletion = function (task, user) {
        console.log('Notifying ' + user + ' of the completion of ' + task.name);
    };

    var save = function (task) {
        console.log('Saving task ' + task.name);
    };

    return {
        complete: complete,
        setComleteDate: setComleteDate,
        notifyCompletion: notifyCompletion,
        save: save
    };
}();

var TaskServiceWrapper = function () {

    var completeAndNotify = function (task) {
        TaskService.complete(task);
        if (task.completed === true){
            TaskService.setComleteDate(task);
            TaskService.notifyCompletion(task, task.user);
            TaskService.save(task);
        }
    };

    return {
        completeAndNotify: completeAndNotify
    };
}();


var myTask = new Task({
    name: 'myTask',
    priority: 1,
    project: 'myProject',
    user: 'Anton',
    completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);