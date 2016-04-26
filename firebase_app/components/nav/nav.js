(function(app){
    'use strict';

    var navComponentCtrl = function($firebaseObject, fbRef){
        var ctrl = this;

        ctrl.userPreferences = $firebaseObject(fbRef.getPreferencesRef());

        ctrl.loaded = false;

        ctrl.userPreferences.$loaded().then(function(data){
            ctrl.loaded = true;
        });

    };

    var navComponent = {
        templateUrl: '/components/nav/nav.html',
        controller: navComponentCtrl
    };

    app.component('navigation', navComponent);

})(angular.module('angularFirebase'));