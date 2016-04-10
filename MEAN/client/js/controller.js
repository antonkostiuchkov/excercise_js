(function (app) {
    'use strict';

    var meetupController = function ($resource) {

        var ctrl = this;

        var Meetup = $resource('/api/meetups');

        Meetup.query(function(results){
            ctrl.meetups = results;
        });

        // ctrl.meetups = [];

        ctrl.createMeetup = function(){
            var meetup = new Meetup();
            meetup.name = ctrl.meetupName;
            meetup.$save(function(result){
                ctrl.meetups.push(result);
            });
            ctrl.meetupName = '';
        };

    };


    app.controller('meetupCtrl', ['$resource', meetupController]);

})(angular.module('meetupManager'));
