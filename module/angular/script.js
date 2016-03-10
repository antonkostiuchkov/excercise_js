(function (app) {
    var taskController = function (Task) {
        var ctrl = this;
        ctrl.tasks = [
            new Task({name: 'task 1'}),
            new Task({name: 'task 2', completed: true })
        ];
    };

    app.controller('taskCtrl', taskController);
}(angular.module('taskManager', [])));