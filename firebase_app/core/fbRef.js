(function(app){
    'use strict';

    var fbRef = function(rootRef, auth){

        var getPreferencesRef = function(){
            return rootRef.child('preferences').child(auth.$getAuth().uid);
        };

        var getCategoriesRef = function(){
            return rootRef.child('categories');
        };

        return {
            getPreferencesRef: getPreferencesRef,
            getCategoriesRef: getCategoriesRef
        };
    };

    app.factory('fbRef', ['rootRef', 'auth', fbRef]);

})(angular.module('angularFirebase'));