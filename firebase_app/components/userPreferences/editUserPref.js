(function(app){
    'use strict';

    var editUserPrefCtrl = function(fbRef, $scope, $location){
        var ctrl = this;

        ctrl.themes = [
            "light",
            "dark"
        ];

        ctrl.save = function(){
            ctrl.userPreferences.$save();
            $location.path('/home');
        };

        ctrl.cancel = function(){
            $location.path('/home');
        };

        ctrl.userPrefData.$bindTo($scope, '$ctrl.userPreferences').then(function(){
            if(!ctrl.userPreferences.theme){
                ctrl.userPreferences.theme = ctrl.themes[0];
            }
        });
    };

    var editUserPref = {
        templateUrl: '/components/userPreferences/editUserPref.html',
        bindings: {
            userPrefData: '=userPreferences'
        },
        controller: editUserPrefCtrl
    };

    app.component('editUserPref', editUserPref);

})(angular.module('angularFirebase'));