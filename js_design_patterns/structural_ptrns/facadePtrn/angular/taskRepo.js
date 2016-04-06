(function (app) {
    var taskService = function ($http) {

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
    };

    app.service('taskService', taskService);
}(angular.module('taskManager')));