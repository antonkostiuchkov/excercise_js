(function(app){
    'use strict';

    var auth = function($firebaseAuth, rootRef){
        return $firebaseAuth(rootRef);
    };

    app.factory('auth', ['$firebaseAuth', 'rootRef', auth]);

})(angular.module('angularFirebase'));