(function () {
    'use strict';

    angular
        .module('angularFirebase', ['ngRoute', 'firebase'])
        .run(function($rootScope, $location){
            $rootScope.$on('$routeChangeError', function(event, nextRoute, prevRoute, err){
                if(err === 'AUTH_REQUIRED') {
                    $location.path('/login');
                }
            });
        })
        .config(function($routeProvider){
            $routeProvider
                .when('/home', {
                    template: '<home></home>',
                    resolve: {
                        currentAuth: function(auth){
                            return auth.$requireAuth();
                        }
                    }
                })
                .when('/login', {
                    template: '<login current-auth="$resolve.currentAuth"></login>',
                    resolve: {
                        currentAuth: function(auth){
                            return auth.$waitForAuth();
                        }
                    }
                })
                .when('/logout', {
                    template: '<logout></logout>',
                })
                .when('/userpref', {
                    template: '<edit-user-pref user-preferences="$resolve.userPreferences"></edit-user-pref>',
                    resolve: {
                        userPreferences: function(fbRef, $firebaseObject, auth){
                            return auth.$requireAuth().then(function(){
                                return $firebaseObject(fbRef.getPreferencesRef()).$loaded();
                            });
                        }
                    }
                })
                .when('/categories', {
                    template: '<category-list categories="$resolve.categories"></category-list>',
                    resolve: {
                        categories: function(fbRef, $firebaseArray, auth){
                            return auth.$requireAuth().then(function(){
                                return $firebaseArray(fbRef.getCategoriesRef()).$loaded();
                            });
                        }
                    }
                })
                .otherwise('/home');
        });
}());