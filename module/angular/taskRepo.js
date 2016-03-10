(function (app) {
    var taskRepo = function ($http) {

        var get = function(id){
            console.log('Getting task ' + id);
            return {
                name: 'New task from database'
            };
        };

        var save = function(task){
            console.log('Saving ' + task.name + ' to the db');
        };

        return {
            get: get,
            save: save
        };
    };

    app.service('TaskRepository', taskRepo);
}(angular.module('taskManager', [])));