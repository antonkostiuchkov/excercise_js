(function(app){
    'use strict';

    var loginController = function(auth, $location){
        var ctrl = this;

        ctrl.anonymousLogin = function(){
            auth.$authAnonymously().then(function(){
                $location.path('/home');
            }).catch(function(err){
                ctrl.errorMessage = err.code;
            });
        };

        ctrl.facebookLogin = function(){
            auth.$authWithOAuthPopup("facebook").then(function(){
                $location.path('/home');
            }).catch(function(err){
                ctrl.errorMessage = err.code;
            });
        };

        ctrl.goBack = function(){
            $location.path('/home');
        };

        ctrl.loggedIn = !!ctrl.currentAuth;
    };

    var loginComponent = {
        templateUrl: '/components/security/login.html',
        bindings: {
            currentAuth: '='
        },
        controller: loginController
    };

    app.component('login', loginComponent);

})(angular.module('angularFirebase'));