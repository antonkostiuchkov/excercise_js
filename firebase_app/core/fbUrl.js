(function(app){
    'use strict';

    app
        .constant('FirebaseUrl', 'https://angularfire3.firebaseio.com/')
        .service('rootRef', ['FirebaseUrl', Firebase]);

})(angular.module('angularFirebase'));