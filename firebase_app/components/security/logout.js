(function(app){
    'use strict';

    var logoutController = function(auth, $location){
        auth.$unauth();
        $location.path('/login');
    };

    var logoutComponent = {
        controller: logoutController
    };

    app.component('logout', logoutComponent);

})(angular.module('angularFirebase'));