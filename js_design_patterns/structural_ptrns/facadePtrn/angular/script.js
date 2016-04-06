(function (app) {

    var taskController = function (Task, taskService) {

        var ctrl = this;

        ctrl.tasks = [ new Task({
            name: 'myTask',
            priority: 1,
            project: 'myProject',
            user: 'Anton',
            completed: false
        })];

        ctrl.completeTask = function (i) {
            var myTask = ctrl.tasks[i];
            taskService.complete(myTask);
            if (task.completed === true){
                taskService.setComleteDate(myTask);
                taskService.notifyCompletion(myTask, myTask.user);
                taskService.save(myTask);
            }
        };

    };

    app.controller('taskCtrl', taskController);
}(angular.module('taskManager', [])));