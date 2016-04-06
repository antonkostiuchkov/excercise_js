(function(app){

    app.factory('UrgentTask', function(Task, TaskRepository){
        var UrgentTask = function(data){
            Task.call(this, data);
            this.priority = data.priority;
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

        return UrgentTask;
    });

})(angular.module('taskManager'));