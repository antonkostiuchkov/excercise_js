(function(app){
    'use strict';

    var homeComponent = {
        templateUrl: '/components/home/home.html'
    };

    app.component('home', homeComponent);

})(angular.module('angularFirebase'));